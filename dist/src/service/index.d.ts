import { AbstractStore, CartItem, LibstorefrontInnerState, MinimalProduct } from '@grupakmk/libstorefront';
export declare class CartBulkService {
    private store;
    /**
     * Adds multiple products to the cart at once
     * @param {MinimalProduct[]} items
     * @returns {Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }}
     */
    addBulk(items: MinimalProduct[]): Promise<{
        added: {
            sku: string;
            qty: string;
            item_id: string;
        };
        error: {
            sku: string;
            error: string;
        };
    }>;
    /**
     * Updates multiple products on the current cart at once
     * @param {Product[]} items
     * @returns {Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }}
     */
    updateBulk(items: CartItem[]): Promise<{
        added: {
            sku: string;
            qty: string;
            item_id: string;
        };
        error: {
            sku: string;
            error: string;
        };
    }>;
    /**
     * Deletes multiple products from the cart or clears the cart
     * To clear the cart entirely do not pass `items` param to the method
     * @param {Product[]} items
     * @returns {Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }}
     */
    deleteBulk(items?: CartItem[]): Promise<CartItem[]>;
    /**
     * Adds order items to the current quote
     * @param {string} orderIncrementId
     * @returns {Promise<unknown>}
     */
    reorder(orderIncrementId: string): Promise<{
        added: {
            sku: string;
            qty: string;
            item_id: string;
        }[];
        error: MinimalProduct[];
    }>;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
