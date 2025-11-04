const a1 = [50, 20, 13, 7, 54, 87, 90, 81, 90];
let total = 0;

for (let valor of a1) {
  console.log(valor);
}

for (let indice in a1) {
  console.log(indice, a1[indice]);
}

a1.forEach((valor, indice) => {
  console.log(valor, indice);
});

a1.forEach((valor) => {
  total += valor;
});

console.log("Total:", total);
