// função construtora - explicação
// Função construtora é uma função especial que serve para criar objetos
// e definir suas propriedades e métodos.
function Pessoa(nome, idade) {
  this.nome = nome; // Define a propriedade 'nome'
  this.idade = idade; // Define a propriedade 'idade'
  this.falar = function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }; // Define o método 'falar'
}

const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Ana", 25);
console.log(pessoa1);
pessoa1.falar();
console.log(pessoa2);
pessoa2.falar();
