# Cart bulk actions plugin
Plugin provides support for bulk actions on quote items such as:
- add to cart multiple products
- update multiple cart items
- delete multiple cart items
- clear quote

## Usage
To use plugin add a dependency to the LSF lib:
```javascript
const LSF = new LibStorefront({
    plugins: [
        CartBulkActionsPlugin
    ]
});
```

and get `CartBulkService` registered by lib:
```javascript
LSF.get(CartBulkService)
```

## Add multiple products to cart
To add multiple products at once:
```javascript
await LSF.get(CartBulkService).addBulk(items);
```

## Update multiple products in cart
To update multiple products at once:
```javascript
await LSF.get(CartBulkService).updateBulk(items);
```

## Delete multiple products in cart
To delete multiple cart items from cart:
```javascript
await LSF.get(CartBulkService).deleteBulk(items);
```

## Clear cart
To clear cart call `deleteBulk` method with no param
```javascript
await LSF.get(CartBulkService).deleteBulk();
```

## Build plugin
Run `npm run build` to build plugin.
Output can be found in `/dist` catalog.

## Test plugin
Plugin can be tested in isolation. To run plugin integration test:
```shell script
npm run test:integration
```
