"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Shop {
    constructor() {
        this._items = [
            new Item_1.default('Item 1', 10, 'Description 1'),
            new Item_1.default('Item 2', 20, 'Description 2'),
            new Item_1.default('Item 3', 30, 'Description 3'),
        ];
    }
    get items() {
        return this._items;
    }
}
exports.default = Shop;
