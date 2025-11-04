// faça um código com try...catch na vida real de projetos
function dividirNumeros(a, b) {
  try {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    const resultado = a / b;
    console.log(`O resultado da divisão de ${a} por ${b} é: ${resultado}`);
  } catch (error) {
    console.error("Ocorreu um erro ao dividir os números:", error.message);
  } finally {
    console.log("Operação de divisão finalizada.");
  }
}
dividirNumeros(10, 2); // Deve funcionar normalmente
dividirNumeros(10, 0); // Deve lançar um erro de divisão por zero
