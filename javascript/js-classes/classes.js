class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`Quem está falando é: ${this.nome}`);
  }
}

//fazendo com função construtora

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`Quem está falando é: ${this.nome}`);
};

const p1 = new Pessoa("Luiz", "Miranda");
console.log(p1);
p1.falar();
