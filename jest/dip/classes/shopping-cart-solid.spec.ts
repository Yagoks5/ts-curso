import { ShoppingCart } from "./shopping-cart-solid";
import { NoDiscount } from "./interfaces/discount";

describe("ShoppingCart", () => {
  let shoppingCart: ShoppingCart;

  beforeEach(() => {
    shoppingCart = new ShoppingCart(new NoDiscount());
  });

  it("should start empty", () => {
    expect(shoppingCart.isEmpty()).toBe(true);
  });

  it("should add items", () => {
    shoppingCart.addItem({ name: "Item 1", price: 100 });
    expect(shoppingCart.items.length).toBe(1);
    expect(shoppingCart.isEmpty()).toBe(false);
  });

  it("should calculate total", () => {
    shoppingCart.addItem({ name: "Item 1", price: 100 });
    shoppingCart.addItem({ name: "Item 2", price: 50 });
    expect(shoppingCart.total()).toBe(150);
  });

  it("should remove items", () => {
    const item1 = { name: "Item 1", price: 100 };
    const item2 = { name: "Item 2", price: 50 };
    shoppingCart.addItem(item1);
    shoppingCart.addItem(item2);
    expect(shoppingCart.items.length).toBe(2);

    shoppingCart.removeItem(0);
    expect(shoppingCart.items.length).toBe(1);
    expect(shoppingCart.items[0]).toBe(item2);
  });

  it("should calculate total with discount", () => {
    shoppingCart.addItem({ name: "Item 1", price: 200 });
    shoppingCart.addItem({ name: "Item 2", price: 100 });
    expect(shoppingCart.totalWithDiscount()).toBe(300);
  });

  it("should clear cart", () => {
    shoppingCart.addItem({ name: "Item 1", price: 100 });
    shoppingCart.addItem({ name: "Item 2", price: 50 });
    expect(shoppingCart.items.length).toBe(2);

    shoppingCart.clear();
    expect(shoppingCart.items.length).toBe(0);
    expect(shoppingCart.isEmpty()).toBe(true);
  });
});
