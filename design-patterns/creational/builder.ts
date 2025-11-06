/**
 * Builder (Construtor)
 *
 * O que é:
 * - Separa a construção de um objeto complexo da sua representação, de modo
 *   que o mesmo processo de construção possa criar diferentes representações.
 *
 * Para que serve / Quando usar:
 * - Quando a criação de um objeto envolve muitos parâmetros opcionais ou
 *   etapas, e você quer uma API legível/encadeada para montar o objeto.
 * - Para evitar construtores com muitos parâmetros e melhorar legibilidade.
 */

export class User {
  constructor(
    public name: string,
    public age?: number,
    public address?: string
  ) {}
}

export class UserBuilder {
  private name!: string;
  private age?: number;
  private address?: string;

  setName(name: string) {
    this.name = name;
    return this;
  }

  setAge(age: number) {
    this.age = age;
    return this;
  }

  setAddress(address: string) {
    this.address = address;
    return this;
  }

  build() {
    return new User(this.name, this.age, this.address);
  }
}
