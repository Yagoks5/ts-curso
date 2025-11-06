/**
 * State (Estado)
 *
 * O que é:
 * - Permite que um objeto altere seu comportamento quando seu estado interno
 *   muda. O objeto parecerá ter mudado de classe.
 *
 * Para que serve / Quando usar:
 * - Quando um objeto deve se comportar de maneira diferente dependendo de seu
 *   estado interno, e você quer evitar grandes estruturas condicionais.
 */

export interface Estado {
  executar(): void;
}

export class EstadoParado implements Estado {
  executar() {
    console.log("O carro está parado 🚗🛑");
  }
}

export class EstadoAndando implements Estado {
  executar() {
    console.log("O carro está em movimento 🚗💨");
  }
}

export class Carro {
  private estado: Estado = new EstadoParado();
  setEstado(e: Estado) {
    this.estado = e;
  }
  agir() {
    this.estado.executar();
  }
}
