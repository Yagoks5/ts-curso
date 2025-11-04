// exemplo de callback
function executarOperacao(num1, num2, operacao) {
  return operacao(num1, num2);
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

const resultadoSoma = executarOperacao(5, 3, somar);
console.log(`Resultado da soma: ${resultadoSoma}`); // Resultado da soma: 8

// a função subtrair é passada como callback?
