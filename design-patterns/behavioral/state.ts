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
