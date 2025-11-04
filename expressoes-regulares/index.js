// Exercicio 1 - verifica se a string contem uma palavra especifica.
const texto = "Eu gosto de Javascript";
const regex = /Javascript/;
console.log(regex.test(texto));

console.log("--------------");

// Exercicio 2 - Verifica se a string começa com uma letra específica
/^B/.test("Brasil");
console.log(/^B/.test("Brasil"));
console.log(/^B/.test("abacate"));

console.log("--------------");

// Exercicio 3 - Procurar todas as letras minusculas
const letras = "AbCdeF".match(/[a-z]/g);
console.log(letras);

console.log("--------------");

// Exercicio 4 - Procurar todas as letras maiusculas
const letrasMaiusculas = "AbCdeF".match(/[A-Z]/g);
console.log(letrasMaiusculas);

console.log("--------------");

// Exercicio 5 - Encontrar todos os números
const numeros = "Ano: 2025, Mês: 10, Dia: 29".match(/\d+/g);
console.log(numeros);
