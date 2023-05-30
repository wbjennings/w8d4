import Shop from './Shop';
import User from './User';

// Create a Shop
const shop = new Shop();

// Create a User
const user = new User('John Doe', 25);

// Add items from the shop to the user's cart
const item1 = shop.items[0];
const item2 = shop.items[1];
const item3 = shop.items[2];

user.addToCart(item1);
user.addToCart(item2);
user.addToCart(item3);

// Print the user's cart
user.printCart();

// Remove item2 from the user's cart
user.removeFromCart(item2);

// Remove 2 of item1 from the user's cart
user.removeQuantityFromCart(item1, 2);

// Print the updated cart
user.printCart();

// Calculate the total price of items in the user's cart
const total = user.cartTotal();
console.log(`Cart total: $${total}`);
