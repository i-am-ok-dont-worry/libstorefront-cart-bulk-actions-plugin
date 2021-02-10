import { CartItem, Product } from '@grupakmk/libstorefront';
export declare namespace CartBulkThunks {
    const addBulk: (items: Product[], overwriteQty?: boolean) => (dispatch: any, getState: any) => Promise<{
        added: any;
        error: any;
    }>;
    const updateBulk: (items: CartItem[]) => (dispatch: any, getState: any) => Promise<void>;
    const deleteBulk: (items?: CartItem[]) => (dispatch: any, getState: any) => Promise<void>;
    /**
     * Checks if quote is valid and has a valid cart server token.
     * If not new quote will be created as user quote or guest quote.
     */
    const assertValidQuote: () => (dispatch: any, getState: any) => Promise<unknown>;
    /**
     * Asserts local cart state is in sync with Magento and localstorage
     */
    const syncCartLocalState: () => (dispatch: any, getState: any) => Promise<void>;
}
