/**
 * Strategy (Estratégia)
 *
 * O que é:
 * - Define uma família de algoritmos, encapsula cada um e torna-os
 *   intercambiáveis. Strategy deixa o algoritmo variar independentemente dos
 *   clientes que o utilizam.
 *
 * Para que serve / Quando usar:
 * - Quando você tem várias variações de um algoritmo e quer selecionar uma
 *   delas em tempo de execução, sem tornar o cliente dependente das
 *   implementações concretas.
 */

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
