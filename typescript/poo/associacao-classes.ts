// assossiacao-classes.ts
class Endereco {
  constructor(
    public rua: string,
    public cidade: string,
    public estado: string,
    public cep: string
  ) {}
}

class Pessoa {
  constructor(
    public nome: string,
    public idade: number,
    public endereco: Endereco
  ) {}
}

// Exemplo de uso
const endereco = new Endereco("Rua das Flores", "São Paulo", "SP", "01234-567");
const pessoa = new Pessoa("João Silva", 30, endereco);

console.log(pessoa);

// Composição de classes - uma classe contém outra como parte essencial
class Motor {
  constructor(public potencia: number, public tipo: string) {}
}

class Carro {
  constructor(
    public marca: string,
    public modelo: string,
    public motor: Motor
  ) {}
}

// Exemplo de uso
const motor = new Motor(150, "Gasolina");
const carro = new Carro("Toyota", "Corolla", motor);

console.log(carro);

// Agregação entre classes - uma classe contém referências a outras classes
class Departamento {
  public nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}
class Empresa {
  public departamentos: Departamento[] = [];

  adicionarDepartamento(departamento: Departamento) {
    this.departamentos.push(departamento);
  }
}

// Exemplo de uso
const empresa = new Empresa();
const departamento1 = new Departamento("Recursos Humanos");
const departamento2 = new Departamento("Tecnologia da Informação");
empresa.adicionarDepartamento(departamento1);
