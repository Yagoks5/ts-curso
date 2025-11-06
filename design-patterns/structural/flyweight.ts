/**
 * Flyweight (Padrão Flyweight)
 *
 * O que é:
 * - Compartilha objetos imutáveis para reduzir uso de memória quando há
 *   muitos objetos semelhantes.
 *
 * Para que serve / Quando usar:
 * - Quando for necessário criar muitas instâncias semelhantes e houver
 *   grande ganho ao compartilhar estado intrínseco.
 */

export class Arvore {
  constructor(
    public tipo: string,
    public textura: string,
    public cor: string
  ) {}
}

export class ArvoreFactory {
  private static cache: Record<string, Arvore> = {};
  static getArvore(tipo: string, textura: string, cor: string) {
    const chave = `${tipo}-${textura}-${cor}`;
    if (!this.cache[chave]) {
      this.cache[chave] = new Arvore(tipo, textura, cor);
      console.log("Criando nova árvore:", chave);
    }
    return this.cache[chave];
  }
}
