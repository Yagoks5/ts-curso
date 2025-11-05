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
