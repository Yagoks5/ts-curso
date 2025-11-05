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
