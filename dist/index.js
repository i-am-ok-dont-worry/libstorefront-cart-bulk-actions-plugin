(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LSFPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LSFPlugin"] = factory();
	else
		root["LSFPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CartBulkDao = exports.CartBulkService = exports.CartBulkActionsPlugin = void 0;
var index_1 = __webpack_require__(/*! ./src/index */ "./src/index.ts");
Object.defineProperty(exports, "CartBulkActionsPlugin", { enumerable: true, get: function () { return index_1.CartBulkActionsPlugin; } });
var index_2 = __webpack_require__(/*! ./src/service/index */ "./src/service/index.ts");
Object.defineProperty(exports, "CartBulkService", { enumerable: true, get: function () { return index_2.CartBulkService; } });
var index_3 = __webpack_require__(/*! ./src/dao/index */ "./src/dao/index.ts");
Object.defineProperty(exports, "CartBulkDao", { enumerable: true, get: function () { return index_3.CartBulkDao; } });


/***/ }),

/***/ "./src/dao/index.ts":
/*!**************************!*\
  !*** ./src/dao/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartBulkDao = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var CartBulkDao = /** @class */ (function () {
    function CartBulkDao(taskQueue) {
        this.taskQueue = taskQueue;
    }
    CartBulkDao.prototype.addOrUpdate = function (cartId, cartItems) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/cart-bulk/' + cartId + '?token={{token}}&storeCode={{storeCode}}'),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(cartItems)
            },
            silent: true
        });
    };
    CartBulkDao.prototype.deleteOrClear = function (cartId, cartItemsIds) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/cart-bulk/' + cartId + '?token={{token}}&storeCode={{storeCode}}'),
            payload: __assign({ method: 'DELETE', headers: { 'Content-Type': 'application/json' }, mode: 'cors' }, (cartItemsIds && { body: JSON.stringify(cartItemsIds) })),
            silent: true
        });
    };
    CartBulkDao.prototype.reorder = function (cartId, orderIncrementId) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/cart-bulk/' + cartId + '/reorder/' + orderIncrementId + '?token={{token}}&storeCode={{storeCode}}'),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
            },
            silent: true
        });
    };
    CartBulkDao = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.TaskQueue)),
        __metadata("design:paramtypes", [Object])
    ], CartBulkDao);
    return CartBulkDao;
}());
exports.CartBulkDao = CartBulkDao;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CartBulkActionsPlugin = void 0;
var dao_1 = __webpack_require__(/*! ./dao */ "./src/dao/index.ts");
var service_1 = __webpack_require__(/*! ./service */ "./src/service/index.ts");
/**
 * Plugin provides support with bulk actions on Magento quote
 * such as bulk adding, updating or deleting cart item.
 */
exports.CartBulkActionsPlugin = (function (libstorefront) {
    libstorefront.getIOCContainer().bind(dao_1.CartBulkDao).to(dao_1.CartBulkDao);
    libstorefront.getIOCContainer().bind(service_1.CartBulkService).to(service_1.CartBulkService);
});


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartBulkService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var cart_bulk_thunks_1 = __webpack_require__(/*! ../store/cart-bulk.thunks */ "./src/store/cart-bulk.thunks.ts");
var CartBulkService = /** @class */ (function () {
    function CartBulkService(store) {
        this.store = store;
    }
    /**
     * Adds multiple products to the cart at once
     * @param {MinimalProduct[]} items
     * @returns {Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }}
     */
    CartBulkService.prototype.addBulk = function (items) {
        return this.store.dispatch(cart_bulk_thunks_1.CartBulkThunks.addBulk(items));
    };
    /**
     * Updates multiple products on the current cart at once
     * @param {Product[]} items
     * @returns {Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }}
     */
    CartBulkService.prototype.updateBulk = function (items) {
        return this.store.dispatch(cart_bulk_thunks_1.CartBulkThunks.updateBulk(items));
    };
    /**
     * Deletes multiple products from the cart or clears the cart
     * To clear the cart entirely do not pass `items` param to the method
     * @param {Product[]} items
     * @returns {Promise<{ added: { sku: string, qty: string, item_id: string }, error: { sku: string, error: string } }}
     */
    CartBulkService.prototype.deleteBulk = function (items) {
        return this.store.dispatch(cart_bulk_thunks_1.CartBulkThunks.deleteBulk(items));
    };
    /**
     * Adds order items to the current quote
     * @param {string} orderIncrementId
     * @returns {Promise<unknown>}
     */
    CartBulkService.prototype.reorder = function (orderIncrementId) {
        return this.store.dispatch(cart_bulk_thunks_1.CartBulkThunks.reorder(orderIncrementId));
    };
    CartBulkService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.AbstractStore)),
        __metadata("design:paramtypes", [libstorefront_1.AbstractStore])
    ], CartBulkService);
    return CartBulkService;
}());
exports.CartBulkService = CartBulkService;


/***/ }),

/***/ "./src/store/cart-bulk.thunks.ts":
/*!***************************************!*\
  !*** ./src/store/cart-bulk.thunks.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartBulkThunks = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
var partition_1 = __importDefault(__webpack_require__(/*! lodash/partition */ "lodash/partition"));
var CartBulkThunks;
(function (CartBulkThunks) {
    var _this = this;
    CartBulkThunks.addBulk = function (items, overwriteQty) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var productsToSync, cartToken_1, preparedProducts, response, _a, addedProducts_1, erroredProducts, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 10, , 13]);
                    if (!Array.isArray(items)) {
                        throw new Error('Invalid argument. Items must be an array');
                    }
                    libstorefront_1.CartUtils.assertShopOnline();
                    return [4 /*yield*/, libstorefront_1.CartUtils.assertNotLocked()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, dispatch(CartBulkThunks.assertValidQuote())];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setActionLock(true))];
                case 3:
                    _b.sent();
                    productsToSync = libstorefront_1.prepareProductsToAdd(items);
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.cartAddingItem(true))];
                case 4:
                    _b.sent();
                    cartToken_1 = getState().cart.cartServerToken;
                    preparedProducts = productsToSync
                        .map(function (item) { return libstorefront_1.SyncUtils.prepareProductBeforeAdd(item, overwriteQty); })
                        .map(function (item) { return (__assign(__assign({}, item), { quoteId: cartToken_1 })); });
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.CartBulkDao).addOrUpdate(cartToken_1, preparedProducts)];
                case 5:
                    response = _b.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 9];
                    _a = partition_1.default(response.result, function (el) { return !el.hasOwnProperty('error'); }), addedProducts_1 = _a[0], erroredProducts = _a[1];
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.addItems(productsToSync.map(function (cartItem) {
                            return libstorefront_1.SyncUtils.mergeItem(cartItem, addedProducts_1.map(function (o) { return (__assign(__assign({}, o), { quote_id: cartToken_1 })); }));
                        }).filter(Boolean)))];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setActionLock(false))];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.cartAddingItem(false))];
                case 8:
                    _b.sent();
                    return [2 /*return*/, {
                            added: addedProducts_1,
                            error: erroredProducts
                        }];
                case 9: return [3 /*break*/, 13];
                case 10:
                    e_1 = _b.sent();
                    libstorefront_1.Logger.warn('Cannot add bulk products', 'cart-bulk-actions-plugin', e_1.message);
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setActionLock(false))];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.cartAddingItem(false))];
                case 12:
                    _b.sent();
                    return [3 /*break*/, 13];
                case 13: return [2 /*return*/];
            }
        });
    }); }; };
    CartBulkThunks.updateBulk = function (items) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, dispatch(CartBulkThunks.addBulk(items))];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    libstorefront_1.Logger.warn('Cannot update bulk products', 'cart-bulk-actions-plugin', e_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }; };
    CartBulkThunks.deleteBulk = function (items) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var cartToken, itemIds, response, result, _i, items_1, item, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 16, , 18]);
                    if (!Array.isArray(items) && (typeof items !== 'undefined' && items !== null)) {
                        throw new Error('Invalid argument. Items must be an array');
                    }
                    libstorefront_1.CartUtils.assertShopOnline();
                    return [4 /*yield*/, libstorefront_1.CartUtils.assertNotLocked()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, dispatch(CartBulkThunks.assertValidQuote())];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setActionLock(true))];
                case 3:
                    _a.sent();
                    cartToken = getState().cart.cartServerToken;
                    itemIds = items ? items.map(function (_a) {
                        var item_id = _a.item_id;
                        return item_id;
                    }) : null;
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.CartBulkDao).deleteOrClear(cartToken, itemIds)];
                case 4:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 15];
                    result = response.result;
                    if (!result) return [3 /*break*/, 15];
                    if (!items) return [3 /*break*/, 11];
                    _i = 0, items_1 = items;
                    _a.label = 5;
                case 5:
                    if (!(_i < items_1.length)) return [3 /*break*/, 8];
                    item = items_1[_i];
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.deleteItem({ product: item, removeByParentSku: false }))];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    _i++;
                    return [3 /*break*/, 5];
                case 8: return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setActionLock(false))];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, dispatch(CartBulkThunks.syncCartLocalState())];
                case 10:
                    _a.sent();
                    return [3 /*break*/, 15];
                case 11: return [4 /*yield*/, dispatch(libstorefront_1.CartActions.resetCart())];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setActionLock(false))];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, dispatch(CartBulkThunks.syncCartLocalState())];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15: return [3 /*break*/, 18];
                case 16:
                    e_3 = _a.sent();
                    libstorefront_1.Logger.warn('Cannot delete bulk products', 'cart-bulk-actions-plugin', e_3.message);
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setActionLock(false))];
                case 17:
                    _a.sent();
                    return [3 /*break*/, 18];
                case 18: return [2 /*return*/];
            }
        });
    }); }; };
    CartBulkThunks.reorder = function (orderIncrementId) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var cartToken, response, result, _a, addedProducts, erroredProducts, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 10, , 12]);
                    if (!orderIncrementId) {
                        throw new Error('Invalid argument. orderIncrementId must be defined');
                    }
                    return [4 /*yield*/, libstorefront_1.CartUtils.assertNotLocked()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, dispatch(CartBulkThunks.assertValidQuote())];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setActionLock(true))];
                case 3:
                    _b.sent();
                    cartToken = getState().cart.cartServerToken;
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.CartBulkDao).reorder(cartToken, orderIncrementId)];
                case 4:
                    response = _b.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 9];
                    result = response.result;
                    _a = partition_1.default(result, function (el) { return !el.hasOwnProperty('error'); }), addedProducts = _a[0], erroredProducts = _a[1];
                    if (!(erroredProducts && erroredProducts.length)) return [3 /*break*/, 6];
                    return [4 /*yield*/, dispatch(CartBulkThunks.expandProducts(erroredProducts))];
                case 5:
                    erroredProducts = _b.sent();
                    _b.label = 6;
                case 6: return [4 /*yield*/, libstorefront_1.IOCContainer.get(libstorefront_1.CartService).loadCart()];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setActionLock(false))];
                case 8:
                    _b.sent();
                    return [2 /*return*/, {
                            added: addedProducts,
                            error: erroredProducts
                        }];
                case 9: return [3 /*break*/, 12];
                case 10:
                    e_4 = _b.sent();
                    libstorefront_1.Logger.warn("Cannot reorder " + orderIncrementId + ".", 'cart-bulk-actions-plugin', e_4.message);
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setActionLock(false))];
                case 11:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    }); }; };
    /**
     * Checks if quote is valid and has a valid cart server token.
     * If not new quote will be created as user quote or guest quote.
     */
    CartBulkThunks.assertValidQuote = function () { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var store, token, e_5, user, guestCart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    store = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, libstorefront_1.CartUtils.observeTokenChange()];
                case 2:
                    token = _a.sent();
                    return [2 /*return*/, token];
                case 3:
                    e_5 = _a.sent();
                    user = store.getState().user.current;
                    guestCart = !user;
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(libstorefront_1.CartService).createCart({ guestCart: guestCart })];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); }; };
    /**
     * Asserts local cart state is in sync with Magento and localstorage
     */
    CartBulkThunks.syncCartLocalState = function () { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var cart, cartItems, cartServerToken, currentCartHash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cart = getState().cart;
                    cartItems = cart.cartItems, cartServerToken = cart.cartServerToken;
                    currentCartHash = libstorefront_1.CartUtils.calcItemsHmac(cartItems, cartServerToken);
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setSync())];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, libstorefront_1.StorageManager.getInstance().get(libstorefront_1.StorageCollection.CART).setItem(libstorefront_1.StorageCollectionKeys.CURRENT_CART_TOKEN, cartServerToken)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, libstorefront_1.StorageManager.getInstance().get(libstorefront_1.StorageCollection.CART).setItem(libstorefront_1.StorageCollectionKeys.CURRENT_CART_HASH, currentCartHash)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, libstorefront_1.StorageManager.getInstance().get(libstorefront_1.StorageCollection.CART).setItem(libstorefront_1.StorageCollectionKeys.CURRENT_CART, cartItems)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, dispatch(libstorefront_1.CartActions.setItemsHash(currentCartHash))];
                case 5:
                    _a.sent();
                    libstorefront_1.Logger.info('Synchronization complete', 'sync');
                    return [2 /*return*/];
            }
        });
    }); }; };
    CartBulkThunks.expandProducts = function (products) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var skus, query, result, cartItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    skus = products.map(function (_a) {
                        var sku = _a.sku;
                        return sku;
                    });
                    query = new libstorefront_1.SearchQuery();
                    query.applyFilter({ key: 'sku', value: { in: skus } });
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(libstorefront_1.ProductService).getProducts({ query: query })];
                case 1:
                    result = _a.sent();
                    if (result && result.items.length) {
                        cartItems = products.map(function (cartItem) {
                            var serverItem = result.items.find(function (ci) { return ci.sku === cartItem.sku; });
                            var output = serverItem ? __assign(__assign({}, cartItem), serverItem) : cartItem;
                            return libstorefront_1.ProductUtils.pickMinimalProductObject(output);
                        });
                        return [2 /*return*/, cartItems];
                    }
                    else {
                        return [2 /*return*/, products];
                    }
                    return [2 /*return*/];
            }
        });
    }); }; };
})(CartBulkThunks = exports.CartBulkThunks || (exports.CartBulkThunks = {}));


/***/ }),

/***/ "@grupakmk/libstorefront":
/*!******************************************!*\
  !*** external "@grupakmk/libstorefront" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "lodash/partition":
/*!***********************************!*\
  !*** external "lodash/partition" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/partition");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map