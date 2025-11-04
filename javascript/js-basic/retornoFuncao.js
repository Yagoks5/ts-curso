// return - retorna um valor e termina a função
function soma(a, b) {
  return a + b;
}

function calculadora(num1, num2, funcao) {
  return funcao(num1, num2);
}
console.log(calculadora(2, 2, soma));
