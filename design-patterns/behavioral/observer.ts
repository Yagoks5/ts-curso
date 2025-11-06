/**
 * Observer (Observador / Publicador-Inscrito)
 *
 * O que é:
 * - Define uma dependência um-para-muitos entre objetos, de modo que quando
 *   um objeto muda de estado, todos os seus dependentes são notificados e
 *   atualizados automaticamente.
 *
 * Para que serve / Quando usar:
 * - Quando mudanças em um objeto devem ser refletidas em outros objetos de
 *   forma desacoplada (ex.: eventos, notificações, UI reativa).
 */

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
