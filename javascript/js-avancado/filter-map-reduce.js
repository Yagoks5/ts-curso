// gere um código com metodos filter, map e reduce para processar uma lista de números

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar números pares
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Mapear para o quadrado dos números pares
const squaredEvenNumbers = evenNumbers.map((num) => num * num);

// Reduzir para a soma dos quadrados dos números pares
const sumOfSquares = squaredEvenNumbers.reduce(
  (accumulator, current) => accumulator + current,
  0
);

console.log("Números pares:", evenNumbers);
console.log("Quadrados dos números pares:", squaredEvenNumbers);
console.log("Soma dos quadrados dos números pares:", sumOfSquares);
