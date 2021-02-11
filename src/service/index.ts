import { injectable, inject } from 'inversify';
import { AbstractStore, CartItem, LibstorefrontInnerState, Product } from '@grupakmk/libstorefront';
import { CartBulkThunks } from '../store/cart-bulk.thunks';

@injectable()
export class CartBulkService {

    /**
     * Adds multiple products to the cart at once
     * @param {Product[]} items
     * @returns {Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }}
     */
    public addBulk (items: Product[]): Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }> {
        return this.store.dispatch(CartBulkThunks.addBulk(items));
    }

    /**
     * Updates multiple products on the current cart at once
     * @param {Product[]} items
     * @returns {Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }}
     */
    public updateBulk (items: CartItem[]): Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }> {
        return this.store.dispatch(CartBulkThunks.updateBulk(items));
    }

    /**
     * Deletes multiple products from the cart or clears the cart
     * To clear the cart entirely do not pass `items` param to the method
     * @param {Product[]} items
     * @returns {Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }}
     */
    public deleteBulk (items?: CartItem[]): Promise<CartItem[]> {
        return this.store.dispatch(CartBulkThunks.deleteBulk(items));
    }

    /**
     * Adds order items to the current quote
     * @param {string} orderIncrementId
     * @returns {Promise<unknown>}
     */
    public reorder (orderIncrementId: string): Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }> {
        return this.store.dispatch(CartBulkThunks.reorder(orderIncrementId));
    }

    public constructor(@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}
}
