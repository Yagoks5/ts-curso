const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados); // [50, 80, 11, 15, 22, 27]

console.log(numeros.filter((valor) => valor > 50)); // [80]
console.log(numeros.filter((valor) => valor < 10)); // [5, 1, 2, 3, 5, 8, 7]

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];
