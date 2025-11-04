const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map((x) => x * 2);

console.log(numerosDobrados); // [2, 4, 6, 8, 10]

// Exemplo com objetos
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 30 },
  { nome: "Carla", idade: 35 },
];

const nomes = pessoas.map((pessoa) => pessoa.nome);

console.log(nomes); // ['Ana', 'Bruno', 'Carla']

// Exemplo com strings
const palavras = ["olá", "mundo", "JavaScript"];

const palavrasMaiusculas = palavras.map((palavra) => palavra.toUpperCase());

console.log(palavrasMaiusculas); // ['OLÁ', 'MUNDO', 'JAVASCRIPT']

const comIds = pessoas.map((pessoa, index) => {
  return { id: index + 1, ...pessoa };
});

console.log(comIds);
