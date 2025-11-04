// cria um exeplo de for of e for in

const frutas = ["maçã", "banana", "laranja"];

// Usando for...of para iterar sobre os valores do array
console.log("Usando for...of:");
for (const fruta of frutas) {
  console.log(fruta);
}

// Usando for...in para iterar sobre os índices do array
console.log("\nUsando for...in:");
for (const indice in frutas) {
  console.log(indice, frutas[indice]);
}
