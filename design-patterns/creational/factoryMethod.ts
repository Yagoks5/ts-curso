export abstract class Transporte {
  abstract entregar(): void;
}

export class Caminhao extends Transporte {
  entregar() {
    console.log("Entrega feita por caminhão 🚚");
  }
}

export class Navio extends Transporte {
  entregar() {
    console.log("Entrega feita por navio 🚢");
  }
}

export abstract class Logistica {
  abstract criarTransporte(): Transporte;

  // nome principal em PT-BR
  planearEntrega() {
    const transporte = this.criarTransporte();
    transporte.entregar();
  }

  // alias (variações ortográficas/legacy)
  planejarEntrega() {
    this.planearEntrega();
  }
}

export class LogisticaRodoviaria extends Logistica {
  criarTransporte(): Transporte {
    return new Caminhao();
  }
}

export class LogisticaMaritima extends Logistica {
  criarTransporte(): Transporte {
    return new Navio();
  }
}
