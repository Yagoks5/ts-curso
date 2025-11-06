/**
 * Composite (Padrão Composto)
 *
 * O que é:
 * - Compõe objetos em estruturas de árvore para representar hierarquias
 *   parte-todo. Permite que clientes tratem objetos individuais e composições
 *   de maneira uniforme.
 *
 * Para que serve / Quando usar:
 * - Modelar estruturas hierárquicas (por exemplo, sistema de arquivos, UI)
 * - Permitir operações recursivas sobre composições e folhas.
 */

export interface ArquivoSistema {
  mostrar(indente?: string): void;
}

export class Arquivo implements ArquivoSistema {
  constructor(private nome: string) {}
  mostrar(indente = "") {
    console.log(indente + this.nome);
  }
}

export class Pasta implements ArquivoSistema {
  private itens: ArquivoSistema[] = [];
  constructor(private nome: string) {}
  adicionar(item: ArquivoSistema) {
    this.itens.push(item);
  }

  mostrar(indente = "") {
    console.log(indente + this.nome + "/");
    this.itens.forEach((i) => i.mostrar(indente + "  "));
  }
}
