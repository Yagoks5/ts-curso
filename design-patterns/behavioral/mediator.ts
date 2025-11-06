/**
 * Mediator (Mediador)
 *
 * O que é:
 * - Define um objeto que encapsula a forma como um conjunto de objetos
 *   interage. Promove o acoplamento fraco ao evitar que objetos se refiram
 *   explicitamente uns aos outros, permitindo variar suas interações.
 *
 * Para que serve / Quando usar:
 * - Quando muitas classes interagem e a lógica de comunicação fica complexa.
 * - Centraliza a comunicação, reduzindo dependências diretas entre colegas.
 */

export class Participante {
  constructor(public nome: string, private sala?: Sala) {}
  enviar(msg: string) {
    this.sala?.enviar(msg, this);
  }
  receber(msg: string, de: Participante) {
    console.log(`${this.nome} recebeu de ${de.nome}: ${msg}`);
  }
  setSala(sala: Sala) {
    this.sala = sala;
  }
}

export class Sala {
  private usuarios: Participante[] = [];
  entrar(p: Participante) {
    this.usuarios.push(p);
    p.setSala(this);
  }
  enviar(msg: string, de: Participante) {
    this.usuarios.forEach((u) => {
      if (u !== de) u.receber(msg, de);
    });
  }
}
