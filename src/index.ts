import { LibStorefront } from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { CartBulkDao } from './dao';
import { CartBulkService } from './service';

/**
 * Plugin provides support with bulk actions on Magento quote
 * such as bulk adding, updating or deleting cart item.
 */
export const CartBulkActionsPlugin = ((libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind<CartBulkDao>(CartBulkDao).to(CartBulkDao);
    libstorefront.getIOCContainer().bind<CartBulkService>(CartBulkService).to(CartBulkService);
}) as LibstorefrontPlugin;
