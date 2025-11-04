"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(cart, messaging, persistency, customer) {
        this.cart = cart;
        this.messaging = messaging;
        this.persistency = persistency;
        this.customer = customer;
        this._orderStatus = "open";
    }
    Object.defineProperty(Order.prototype, "orderStatus", {
        get: function () {
            return this._orderStatus;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.checkout = function () {
        if (this.cart.isEmpty()) {
            console.log("Seu carrinho está vazio");
            return;
        }
        this._orderStatus = "closed";
        this.messaging.sendMessage("Seu pedido com total de ".concat(this.cart.totalWithDicount(), " foi recebido."));
        this.persistency.saveOrder();
        this.cart.clear();
        console.log("O cliente é:", this.customer.getName(), this.customer.getIDN());
    };
    return Order;
}());
exports.Order = Order;
