/**
 * Command (Comando)
 *
 * O que é:
 * - Encapsula uma solicitação como um objeto, permitindo parametrizar
 *   clientes com diferentes solicitações, enfileirar ou fazer log de
 *   operações, e suportar desfazer/redo.
 *
 * Para que serve / Quando usar:
 * - Quando é necessário separar quem invoca uma operação de quem a executa.
 * - Útil para sistemas com operações agendadas, histórico (undo) ou macros.
 */

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
