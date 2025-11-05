export interface Comando {
  executar(): void;
}

export class Luz {
  ligar() {
    console.log("Luz ligada 💡");
  }
  desligar() {
    console.log("Luz desligada");
  }
}

export class ComandoLigarLuz implements Comando {
  constructor(private luz: Luz) {}
  executar() {
    this.luz.ligar();
  }
}

export class ComandoDesligarLuz implements Comando {
  constructor(private luz: Luz) {}
  executar() {
    this.luz.desligar();
  }
}

export class ControleRemoto {
  private slot?: Comando;
  setComando(c: Comando) {
    this.slot = c;
  }
  pressionar() {
    this.slot?.executar();
  }
}
