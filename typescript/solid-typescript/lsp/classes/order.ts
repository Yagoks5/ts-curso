import type { OrderStatus } from "./interfaces/order-status";
import type { Messaging } from "../services/messaging";
import type { Persistency } from "../services/persistency";
import type { ShoppingCart } from "./shopping-cart-solid";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Seu carrinho está vázio");
      return;
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage(
      `Seu pedido com com o total de ${this.cart.totalWithDiscount()} foi recebido.`
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
