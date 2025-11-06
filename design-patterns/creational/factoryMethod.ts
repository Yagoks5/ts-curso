/**
 * Factory Method (Método de Fábrica)
 *
 * O que é:
 * - Define uma interface para criar um objeto, mas deixa as subclasses decidirem
 *   qual classe instanciar. Permite adiar a instanciação para subclasses.
 *
 * Para que serve / Quando usar:
 * - Quando uma classe não pode antecipar o tipo exato de objetos que deve criar.
 * - Para permitir que subclasses escolham os produtos que serão criados.
 */

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
