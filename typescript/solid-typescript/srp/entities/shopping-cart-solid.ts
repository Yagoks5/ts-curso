import type { CartItem } from "./interfaces/cart-item";
import type { OrderStatus } from "./interfaces/order-status";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log(`Seu pedido com o total de R$${this.total()} foi concluído`);
    this._items.length = 0;
  }
}
