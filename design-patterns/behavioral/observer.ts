export interface Observador {
  atualizar(mensagem: string): void;
}

export class Usuario implements Observador {
  constructor(public nome: string) {}
  atualizar(mensagem: string) {
    console.log(`${this.nome} recebeu: ${mensagem}`);
  }
}

export class CanalNotificacao {
  private observadores: Observador[] = [];
  inscrever(o: Observador) {
    this.observadores.push(o);
  }
  desinscrever(o: Observador) {
    this.observadores = this.observadores.filter((x) => x !== o);
  }
  notificar(msg: string) {
    this.observadores.forEach((o) => o.atualizar(msg));
  }
}
