/**
 * Iterator (Iterador)
 *
 * O que é:
 * - Fornece uma maneira de acessar sequencialmente os elementos de um objeto
 *   agregado sem expor sua representação interna.
 *
 * Para que serve / Quando usar:
 * - Quando você precisa percorrer coleções de forma uniforme (listas,
 *   árvores, etc.) sem acoplar o cliente à estrutura interna.
 */

export class ColecaoNumeros {
  constructor(private items: number[] = []) {}
  adicionar(n: number) {
    this.items.push(n);
  }
  criarIterador() {
    let index = 0;
    const items = this.items;
    return {
      next(): { value?: number; done: boolean } {
        if (index < items.length) return { value: items[index++], done: false };
        return { done: true };
      },
    };
  }
}
