export class Memento {
  constructor(public estado: string) {}
}

export class Editor {
  private conteudo = "";
  escrever(texto: string) {
    this.conteudo += texto;
  }
  salvar(): Memento {
    return new Memento(this.conteudo);
  }
  restaurar(m: Memento) {
    this.conteudo = m.estado;
  }
  mostrar() {
    console.log("Conteúdo:", this.conteudo);
  }
}

export class Cuidador {
  private historico: Memento[] = [];
  adicionar(m: Memento) {
    this.historico.push(m);
  }
  pegar(indice: number) {
    return this.historico[indice];
  }
}
