export interface EstrategiaFrete {
  calcular(distancia: number): number;
}

export class FreteNormal implements EstrategiaFrete {
  calcular(d: number) {
    return d * 1.0;
  }
}

export class FreteExpresso implements EstrategiaFrete {
  calcular(d: number) {
    return d * 2.0;
  }
}

export class CalculadoraFrete {
  constructor(private estrategia: EstrategiaFrete) {}
  setEstrategia(e: EstrategiaFrete) {
    this.estrategia = e;
  }
  calcular(d: number) {
    return this.estrategia.calcular(d);
  }
}
