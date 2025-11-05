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
