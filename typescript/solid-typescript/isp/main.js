"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Interface segregation principle (Princípio da segregação de Interface) -
os clientes não devem ser forçados a depender de types, interfaces ou membros
abstratos que não utilizam
*/
var shopping_cart_1 = require("./classes/shopping-cart");
var order_1 = require("./classes/order");
var messaging_1 = require("./services/messaging");
var persistency_1 = require("./services/persistency");
var product_1 = require("./classes/product");
var discount_1 = require("./classes/discount");
var customer_1 = require("./classes/customer");
// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
var noDiscount = new discount_1.NoDiscount();
var shoppingCart = new shopping_cart_1.ShoppingCart(noDiscount);
var messaging = new messaging_1.Messaging();
var persistency = new persistency_1.Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Luiz',
//   'Miranda',
//   '111.111.111-11',
// );
var enterpriseCustomer = new customer_1.EnterpriseCustomer('Empresa Gigante', '2222222222222222');
var order = new order_1.Order(shoppingCart, messaging, persistency, enterpriseCustomer);
shoppingCart.addItem(new product_1.Product('Camiseta', 49.91));
shoppingCart.addItem(new product_1.Product('Caderno', 9.9123));
shoppingCart.addItem(new product_1.Product('Lápis', 1.59));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
