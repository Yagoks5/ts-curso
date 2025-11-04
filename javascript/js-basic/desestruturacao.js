const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};

const { nome, sobrenome = "Não existe" } = pessoa;

console.log(nome, sobrenome);
