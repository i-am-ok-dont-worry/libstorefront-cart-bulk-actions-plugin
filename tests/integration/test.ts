import {LibStorefront, Product, QueryUtils} from '@grupakmk/libstorefront';
import {CartBulkActionsPlugin} from "../../src";
import {CartBulkService} from "../../src/service";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    defaultStoreCode: 'default',
    plugins: [
        CartBulkActionsPlugin
    ]
}, 'http://localhost:9001');
// }, 'https://api.meringer.staging.grupakmk.pl');

(async () => {
    // await LSF.CartService.createCart({ guestCart: false });
    const query = QueryUtils.fromPhrase('maska');
    const response = await LSF.SearchClient.searchByQuery({ query });
    await LSF.get(CartBulkService).addBulk(response.items);

    const items = LSF.getStore().getState().cart.cartItems;
    const firstTwo = [items[0], items[1]];

    await LSF.get(CartBulkService).deleteBulk();
})();
