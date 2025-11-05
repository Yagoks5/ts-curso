export interface Cafe {
  custo(): number;
  descricao(): string;
}

export class CafeSimples implements Cafe {
  custo() {
    return 5;
  }
  descricao() {
    return "Café simples";
  }
}

export class LeiteDecorator implements Cafe {
  constructor(private cafe: Cafe) {}
  custo() {
    return this.cafe.custo() + 2;
  }
  descricao() {
    return this.cafe.descricao() + " + leite";
  }
}
