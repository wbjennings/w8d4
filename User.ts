import { v4 as uuidv4 } from 'uuid';
import Item from './Item';

class User {
    private _id: string;
    private _name: string;
    private _age: number;
    private _cart: Item[];
  
    constructor(name: string, age: number) {
      this._id = uuidv4();
      this._name = name;
      this._age = age;
      this._cart = [];
    };
  
    public get id(): string {
      return this._id;
    };
  
    public get name(): string {
      return this._name;
    };
  
    public get age(): number {
      return this._age;
    };
  
    public addToCart(item: Item): void {
      this._cart.push(item);
    };
  
    public removeFromCart(item: Item): void {
      this._cart = this._cart.filter((cartItem) => cartItem.id !== item.id);
    };
  
    public removeQuantityFromCart(item: Item, quantity: number): void {
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
    };
  
    public cartTotal(): number {
      let total = 0;
      for (const item of this._cart) {
        total += item.price;
      }
      return total;
    };
  
    public printCart(): void {
      console.log(`Cart for user ${this._name}:`);
      for (const item of this._cart) {
        console.log(`- ${item.name}: $${item.price}`);
      }
    }
};
  

export default User;
