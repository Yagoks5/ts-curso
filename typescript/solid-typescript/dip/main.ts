// DIP - Dependency Inversion Principle
// Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
// Dependa de abstrações, não de implementações.

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart-solid";
import {
  FiftyPercentDiscount,
  NoDiscount,
} from "./classes/interfaces/discount";

// const percentageDiscount = new PercentageDiscount(30);
const fiftyPercentDiscount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("Camera", 499.99));
shoppingCart.addItem(new Product("Mouse", 49.99));
shoppingCart.addItem(new Product("Teclado", 399.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
