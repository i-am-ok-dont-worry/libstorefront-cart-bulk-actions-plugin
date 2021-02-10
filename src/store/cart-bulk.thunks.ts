import {
    CartItem,
    IOCContainer,
    Logger,
    Product,
    SyncUtils,
    CartUtils,
    CartActions,
    prepareProductsToAdd,
    AbstractStore, CartService, HttpStatus, StorageCollection, StorageCollectionKeys,
    StorageManager
} from '@grupakmk/libstorefront';
import { CartBulkDao } from "../dao";
import partition from 'lodash/partition';

export namespace CartBulkThunks {

    export const addBulk = (items: Product[], overwriteQty?: boolean) => async (dispatch, getState) => {
        try {
            if (!Array.isArray(items)) { throw new Error('Invalid argument. Items must be an array'); }

            CartUtils.assertShopOnline();
            await CartUtils.assertNotLocked();
            await dispatch(assertValidQuote());
            await dispatch(CartActions.setActionLock(true));

            const productsToSync = prepareProductsToAdd(items);
            await dispatch(CartActions.cartAddingItem(true));

            const cartToken = getState().cart.cartServerToken;
            const preparedProducts = productsToSync
                .map(item => SyncUtils.prepareProductBeforeAdd(item, overwriteQty))
                .map(item => ({ ...item, quoteId: cartToken }));

            const response = await IOCContainer.get(CartBulkDao).addOrUpdate(cartToken, preparedProducts);

            if (response && response.code === HttpStatus.OK) {
                const [addedProducts, erroredProducts] = partition(response.result, (el) => !el.hasOwnProperty('error'));

                await dispatch(CartActions.addItems(
                    productsToSync.map(cartItem => {
                        return SyncUtils.mergeItem(cartItem, addedProducts.map(o => ({ ...o, quote_id: cartToken })));
                    }).filter(Boolean)
                ));
                await dispatch(CartActions.setActionLock(false));
                await dispatch(CartActions.cartAddingItem(false));

                return {
                    added: addedProducts,
                    error: erroredProducts
                };
            }
        } catch (e) {
            Logger.warn('Cannot add bulk products', 'cart-bulk-actions-plugin', e.message);
            await dispatch(CartActions.setActionLock(false));
            await dispatch(CartActions.cartAddingItem(false));
        }
    };

    export const updateBulk = (items: CartItem[]) => async (dispatch, getState) => {
        try {
            await dispatch(addBulk(items));
        } catch (e) {
            Logger.warn('Cannot update bulk products', 'cart-bulk-actions-plugin', e.message);
        }
    };

    export const deleteBulk = (items?: CartItem[]) => async (dispatch, getState) => {
        try {
            if (!Array.isArray(items) && (typeof items !== 'undefined' && items !== null)) { throw new Error('Invalid argument. Items must be an array'); }

            CartUtils.assertShopOnline();
            await CartUtils.assertNotLocked();
            await dispatch(assertValidQuote());
            await dispatch(CartActions.setActionLock(true));

            const cartToken = getState().cart.cartServerToken;
            const itemIds = items ? items.map(({ item_id }) => item_id) : null;

            const response = await IOCContainer.get(CartBulkDao).deleteOrClear(cartToken, itemIds);

            if (response && response.code === HttpStatus.OK) {
                const result = response.result;
                if (result) {
                    if (items) {
                        for (let item of items) {
                            await dispatch(CartActions.deleteItem({ product: item, removeByParentSku: false }));
                        }

                        await dispatch(CartActions.setActionLock(false));
                        await dispatch(syncCartLocalState());
                    } else {
                        await dispatch(CartActions.resetCart());
                        await dispatch(CartActions.setActionLock(false));
                        await dispatch(syncCartLocalState());
                    }
                }
            }

        } catch (e) {
            Logger.warn('Cannot delete bulk products', 'cart-bulk-actions-plugin', e.message);
            await dispatch(CartActions.setActionLock(false));
        }
    };

    /**
     * Checks if quote is valid and has a valid cart server token.
     * If not new quote will be created as user quote or guest quote.
     */
    export const assertValidQuote = () => async (dispatch, getState) => {
        const store = IOCContainer.get(AbstractStore);
        try {
            const token = await CartUtils.observeTokenChange();
            return token;
        } catch (e) {
            const user = store.getState().user.current;
            const guestCart = !user;
            await IOCContainer.get(CartService).createCart({ guestCart });
        }
    };

    /**
     * Asserts local cart state is in sync with Magento and localstorage
     */
    export const syncCartLocalState = () => async (dispatch, getState) => {
        const { cart } = getState();
        const { cartItems, cartServerToken } = cart;
        const currentCartHash = CartUtils.calcItemsHmac(cartItems, cartServerToken);
        await dispatch(CartActions.setSync());
        await StorageManager.getInstance().get(StorageCollection.CART).setItem(StorageCollectionKeys.CURRENT_CART_TOKEN, cartServerToken);
        await StorageManager.getInstance().get(StorageCollection.CART).setItem(StorageCollectionKeys.CURRENT_CART_HASH, currentCartHash);
        await StorageManager.getInstance().get(StorageCollection.CART).setItem(StorageCollectionKeys.CURRENT_CART, cartItems);
        await dispatch(CartActions.setItemsHash(currentCartHash));

        Logger.info('Synchronization complete', 'sync');
    };
}
