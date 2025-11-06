/**
 * Chain of Responsibility (Cadeia de Responsabilidade)
 *
 * O que é:
 * - Permite que vários objetos tenham a chance de processar uma solicitação,
 *   passando a solicitação ao longo de uma cadeia até que um objeto a trate.
 *
 * Para que serve / Quando usar:
 * - Quando você tem várias maneiras de tratar uma requisição e quer desacoplar
 *   o remetente dos possíveis receptores.
 * - Útil para processamento de eventos, handlers de input/validadores, etc.
 */

export abstract class Manipulador {
  private proximo?: Manipulador;
  setProximo(p: Manipulador) {
    this.proximo = p;
    return p;
  }
  handle(req: string) {
    if (this.proximo) this.proximo.handle(req);
  }
}

export class SuporteBasico extends Manipulador {
  handle(req: string) {
    if (req === "senha")
      console.log("Suporte básico resolveu o problema de senha 🔑");
    else super.handle(req);
  }
}

export class SuporteAvancado extends Manipulador {
  handle(req: string) {
    if (req === "sistema")
      console.log("Suporte avançado resolveu o problema de sistema ⚙️");
    else super.handle(req);
  }
}
