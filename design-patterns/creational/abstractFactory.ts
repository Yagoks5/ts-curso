/**
 * Abstract Factory (Fábrica Abstrata)
 *
 * O que é:
 * - Fornece uma interface para criar famílias de objetos relacionados ou
 *   dependentes sem especificar suas classes concretas.
 *
 * Para que serve / Quando usar:
 * - Quando o sistema deve ser independente de como seus produtos são
 *   criados/compostos/representados.
 * - Quando há várias famílias de produtos relacionados e você quer garantir
 *   que objetos de uma família sejam usados juntos.
 */

export interface Cadeira {
  sentar(): void;
}

export interface Mesa {
  usar(): void;
}

export class CadeiraModerna implements Cadeira {
  sentar() {
    console.log("Sentando na cadeira moderna");
  }
}

export class MesaModerna implements Mesa {
  usar() {
    console.log("Usando mesa moderna");
  }
}

export class CadeiraVitoriana implements Cadeira {
  sentar() {
    console.log("Sentando na cadeira vitoriana");
  }
}

export class MesaVitoriana implements Mesa {
  usar() {
    console.log("Usando mesa vitoriana");
  }
}

export interface FabricaDeMoveis {
  criarCadeira(): Cadeira;
  criarMesa(): Mesa;
}

export class FabricaModerna implements FabricaDeMoveis {
  criarCadeira() {
    return new CadeiraModerna();
  }
  criarMesa() {
    return new MesaModerna();
  }
}

export class FabricaVitoriana implements FabricaDeMoveis {
  criarCadeira() {
    return new CadeiraVitoriana();
  }
  criarMesa() {
    return new MesaVitoriana();
  }
}
