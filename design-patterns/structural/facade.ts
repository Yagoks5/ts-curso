/**
 * Facade (Padrão Fachada)
 *
 * O que é:
 * - Fornece uma interface simplificada e unificada para um conjunto de
 *   interfaces em um subsistema, facilitando o uso para clientes.
 *
 * Para que serve / Quando usar:
 * - Simplificar interações com subsistemas complexos.
 * - Reduzir acoplamento entre cliente e implementação interna dos subsistemas.
 */

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
