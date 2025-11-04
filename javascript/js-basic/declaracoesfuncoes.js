// explica hoisting
// As funções declaradas são "elevadas" ao topo do escopo
console.log(soma(3, 4)); // 7

function soma(x, y) {
  return x + y;
}

// first class objects
// function expression

const souUmDado = function () {
  console.log("Sou um dado");
};

souUmDado(); // "Sou um dado"

function executaFuncao(funcao) {
  funcao();
}

executaFuncao(souUmDado); // "Sou um dado"

// Arrow function
const funcaoArrow = (x) => x * 2;
console.log(funcaoArrow(5)); // 10

//Dentro de um objeto
const obj = {
  falar: function () {
    console.log("Estou falando");
  },
};

obj.falar(); // "Estou falando"

// Dentro de um array
const array = [
  function (x) {
    return x * 3;
  },
];

console.log(array[0](4)); // 12

// Diferença entre parâmetros e argumentos
function exemploParametros(param1, param2) {
  return param1 + param2;
}
