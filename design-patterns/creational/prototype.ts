/**
 * Prototype (Protótipo)
 *
 * O que é:
 * - Especifica os tipos de objetos a serem criados usando uma instância-protótipo
 *   e cria novos objetos pela cópia desse protótipo (clonagem).
 *
 * Para que serve / Quando usar:
 * - Quando a criação de um novo objeto através de construtor é cara ou
 *   complicada, e é mais eficiente clonar um objeto existente.
 * - Para obter duplicatas independentes de objetos existentes.
 */

export interface Prototype<T> {
  clone(): T;
}

export class Persona implements Prototype<Persona> {
  constructor(public nome: string, public idade: number) {}
  clone(): Persona {
    return new Persona(this.nome, this.idade);
  }
}
