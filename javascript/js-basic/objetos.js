const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
  endereco: {
    rua: "Rua A",
    numero: 100,
    cidade: "São Paulo",
    estado: "SP",
  },
  saudacao: function () {
    console.log(`Olá, meu nome é ${this.nome} e eu sou ${this.profissao}.`);
  },

  incrementarIdade() {
    this.idade++;
  },
};

console.log(pessoa.endereco); // Acessando propriedade
