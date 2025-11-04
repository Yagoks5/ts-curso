// metodos array revisão.
const nomes = ["Ana", "Ju", "Leo", "Paula"];

nomes.push("Rafael"); // adiciona no final do array
nomes.unshift("Marcos"); // adiciona no começo do array
nomes.pop(); // remove o ultimo elemento do array
const removido = nomes.pop(); // remove o ultimo elemento do array e retorna o valor removido
const primeiro = nomes.shift(); // remove o primeiro elemento do array e retorna o valor removido
const segundo = nomes.shift(); // remove o primeiro elemento do array e retorna o valor removido

console.log(nomes, removido, primeiro, segundo);
console.log(nomes.length); // tamanho do array

const novo = nomes.slice(1, 3); // novo array a partir do array original (não altera o array original)
console.log(novo);
console.log(nomes);

const nome = "João da Silva Santos";
const nome2 = nome.split(" "); // transforma string em array
console.log(nome2);

const nomes3 = new Array("Maria", "João", "Eduardo", "Gabriel", "Julia");
console.log(nomes3);
