export abstract class Discount {
  protected discount: number = 0;
  calculate(price: number): number {
    return price - (price * this.discount) / 100;
  }
}

// isso segue o open/closed principle, pois se eu quiser criar outro tipo de desconto, eu posso extender a classe Discount sem modificar o código existente.

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 50;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 10;
}

export class NoDiscount extends Discount {
  protected readonly discount = 0;
}
