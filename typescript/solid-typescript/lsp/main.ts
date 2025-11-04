// Principio da substituição de Liskov (Liskov Substitution Principle - LSP)
// Uma classe derivada deve ser substituível por sua classe base sem alterar o funcionamento do programa.
// Ou seja, se uma classe B é uma subclasse de A, então devemos ser capazes de substituir A por B sem que isso afete o funcionamento do programa.

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
