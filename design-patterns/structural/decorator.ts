/**
 * Decorator (Padrão Decorador)
 *
 * O que é:
 * - Permite adicionar responsabilidades a objetos de forma dinâmica, sem
 *   alterar a classe original, encapsulando o objeto decorado.
 *
 * Para que serve / Quando usar:
 * - Compor comportamentos em tempo de execução (por exemplo, adicionar
 *   complementos a um produto).
 * - Evitar o uso excessivo de subclasses para combinar funcionalidades.
 */

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
