import { TaskQueue, Task, URLTransform } from "@grupakmk/libstorefront";
import { inject, injectable } from "inversify";

@injectable()
export class CartBulkDao {

    public addOrUpdate (cartId, cartItems): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/cart-bulk/' + cartId + '?token={{token}}&storeCode={{storeCode}}'),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(cartItems)
            },
            silent: true
        });
    }

    public deleteOrClear (cartId, cartItemsIds): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/cart-bulk/' + cartId + '?token={{token}}&storeCode={{storeCode}}'),
            payload: {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                ...(cartItemsIds && { body: JSON.stringify(cartItemsIds) })
            },
            silent: true
        });
    }

    public reorder (cartId, orderIncrementId: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/cart-bulk/' + cartId + '/reorder/' + orderIncrementId + '?token={{token}}&storeCode={{storeCode}}'),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
            },
            silent: true
        })
    }

    public constructor(@inject(TaskQueue) private taskQueue) {}
}
