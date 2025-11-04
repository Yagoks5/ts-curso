// Exemplo de uso de async/await em JavaScript, que espera que outra função seja resolvida.
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function executarTarefa() {
  console.log("Tarefa iniciada...");
  await esperar(2000); // Espera por 2 segundos
  console.log("Tarefa concluída após 2 segundos!");
}

executarTarefa();
// Saída esperada:
// Tarefa iniciada...
// (após 2 segundos)
// Tarefa concluída após 2 segundos!

// qual o uso na prática?
// O uso de async/await é especialmente útil em situações onde você precisa realizar
// operações assíncronas em sequência, garantindo que cada operação seja concluída
// antes de iniciar a próxima.
// Isso torna o código mais legível e fácil de entender, evitando o "callback hell"
//  que pode ocorrer com promessas encadeadas.
