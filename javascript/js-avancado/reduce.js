const numeros = [1, 2, 3, 4, 5];

const somaNumeros = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(somaNumeros); // Saída: 15

// Exemplo com array de objetos
const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Tênis", preco: 150 },
];

const totalPreco = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.preco;
}, 0);
console.log(totalPreco); // Saída: 300
