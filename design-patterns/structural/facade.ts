export class SubsistemaA {
  ligar() {
    console.log("Ligando sistema A");
  }
}

export class SubsistemaB {
  iniciar() {
    console.log("Iniciando sistema B");
  }
}

export class FacadeSistema {
  private a = new SubsistemaA();
  private b = new SubsistemaB();
  inicializar() {
    this.a.ligar();
    this.b.iniciar();
    console.log("Sistema pronto ✅");
  }
}
