export interface Prototype<T> {
  clone(): T;
}

export class Persona implements Prototype<Persona> {
  constructor(public nome: string, public idade: number) {}
  clone(): Persona {
    return new Persona(this.nome, this.idade);
  }
}
