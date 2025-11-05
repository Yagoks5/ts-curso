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
