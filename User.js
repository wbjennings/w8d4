"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(name, age) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._age = age;
        this._cart = [];
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    addToCart(item) {
        this._cart.push(item);
    }
    removeFromCart(item) {
        this._cart = this._cart.filter((cartItem) => cartItem.id !== item.id);
    }
    removeQuantityFromCart(item, quantity) {
        let count = 0;
        this._cart = this._cart.filter((cartItem) => {
            if (cartItem.id === item.id) {
                count++;
                if (count <= quantity) {
                    return false;
                }
            }
            return true;
        });
    }
    cartTotal() {
        let total = 0;
        for (const item of this._cart) {
            total += item.price;
        }
        return total;
    }
    printCart() {
        console.log(`Cart for user ${this._name}:`);
        for (const item of this._cart) {
            console.log(`- ${item.name}: $${item.price}`);
        }
    }
}
exports.default = User;
