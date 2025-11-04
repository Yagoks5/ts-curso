// interfaces typescript
interface Pessoa {
  nome: string;
  idade: number;
}

const pessoa1: Pessoa = {
  nome: "João",
  idade: 30,
};

class Funcionario implements Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}
// implements é usado para garantir que uma classe siga a estrutura definida por
// uma interface.
