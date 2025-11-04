let num1 = 9.54578;
let num2 = Math.floor(num1); // arredonda para baixo
console.log(num2);

let num3 = Math.ceil(num1); // arredonda para cima
console.log(num3);

let num4 = Math.round(15.675); // arredonda para o inteiro mais próximo
console.log(num4);

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -50, 1500, 500, 250)); // retorna o maior número
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -50, 1500, 500, 250)); // retorna o menor número

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // número aleatório entre 5 e 10
console.log(aleatorio);
