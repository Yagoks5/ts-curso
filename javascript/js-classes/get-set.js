class Carro {
  constructor(nome, velocidade) {
    this.nome = nome;
    this.velocidade = velocidade;
  }

  get velocidadeAtual() {
    return this.velocidade;
  }
}

const p1 = new Carro("Fusca", 50);

console.log(p1.velocidadeAtual);
