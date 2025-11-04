const pessoa1 = new Object();
pessoa1.nome = "Yago";
pessoa1.idade = 28;
pessoa1.profissao = "Desenvolvedor";
pessoa1.falarNome = function () {
  console.log(`Meu nome é ${this.nome}`);
};

pessoa1.falarNome();

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
  console.log(chave, pessoa1[chave]);
}

// p1 = endereco memoria -> valor;
