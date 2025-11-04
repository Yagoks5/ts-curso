// implementando type alias em classes Typescript
// Definindo um type alias para uma estrutura de dados
// o que significa? que uma classe pode implementar um type alias
type Pessoa = {
  nome: string;
  idade: number;
  saudacao(): string;
};

class Usuario implements Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const usuario1 = new Usuario("Ana", 28);
console.log(usuario1.saudacao()); // Olá, meu nome é Ana e tenho 28 anos.
