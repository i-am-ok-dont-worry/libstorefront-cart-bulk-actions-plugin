import { Task } from "@grupakmk/libstorefront";
export declare class CartBulkDao {
    private taskQueue;
    addOrUpdate(cartId: any, cartItems: any): Promise<Task>;
    deleteOrClear(cartId: any, cartItemsIds: any): Promise<Task>;
    constructor(taskQueue: any);
}
