function funcao() {
  console.log(arguments[1]);
}

funcao("valor", 1, 2, 3, 4, 5, 6, 7, 8, 9);

// argumentos de valor padrão
function funcao2(a, b = 2, c = 3) {
  console.log(a + b + c);
}

funcao2(1); // 6 (1 + 2 + 3)
funcao2(1, 10); // 14 (1 + 10 + 3)
funcao2(1, 10, 20); // 31 (1 + 10 + 20)

// desestruturação como parâmetro
function funcao3({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

funcao3({ nome: "Luiz", sobrenome: "Otávio", idade: 30 });

let obj = { nome: "Luiz", sobrenome: "Otávio", idade: 30 };
funcao3(obj);

// desestruturação como parâmetro (array)
function funcao4([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

funcao4(["Luiz", "Otávio", 30]);

let arr = ["Luiz", "Otávio", 30];
funcao4(arr);

// rest operator como parâmetro
function funcao5(...args) {
  console.log(args);
}

funcao5(1, 2, 3, 4, 5, 6, 7, 8, 9);

// mais um exemplo com rest operator
function funcao6(a, b, ...args) {
  console.log(a, b, args);
}

funcao6(1, 2, 3, 4, 5, 6, 7, 8, 9);

const conta = (...args) => {
  console.log(args);
};
conta(1, 2, 3, 4, 5, 6, 7, 8, 9999);
