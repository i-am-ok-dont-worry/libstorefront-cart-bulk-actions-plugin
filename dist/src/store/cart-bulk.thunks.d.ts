import { CartItem, Product, MinimalProduct } from '@grupakmk/libstorefront';
export declare namespace CartBulkThunks {
    const addBulk: (items: MinimalProduct[], overwriteQty?: boolean) => (dispatch: any, getState: any) => Promise<{
        added: any;
        error: any;
    }>;
    const updateBulk: (items: CartItem[]) => (dispatch: any, getState: any) => Promise<void>;
    const deleteBulk: (items?: CartItem[]) => (dispatch: any, getState: any) => Promise<void>;
    const reorder: (orderIncrementId: string) => (dispatch: any, getState: any) => Promise<{
        added: any;
        error: any;
    }>;
    /**
     * Checks if quote is valid and has a valid cart server token.
     * If not new quote will be created as user quote or guest quote.
     */
    const assertValidQuote: () => (dispatch: any, getState: any) => Promise<unknown>;
    /**
     * Asserts local cart state is in sync with Magento and localstorage
     */
    const syncCartLocalState: () => (dispatch: any, getState: any) => Promise<void>;
    const expandProducts: (products: Partial<Product>[]) => (dispatch: any, getState: any) => Promise<Partial<Product>[]>;
}
