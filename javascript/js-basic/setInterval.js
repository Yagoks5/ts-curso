// Crie um exemplo de setTImeout e setInterval

// Exemplo de setTimeout
setTimeout(() => {
  console.log("Esta mensagem aparece após 2 segundos");
}, 2000);

// Exemplo de setInterval
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Esta mensagem aparece a cada 1 segundo. Contagem: ${count}`);
  if (count === 5) {
    clearInterval(intervalId); // Para o intervalo após 5 execuções
    console.log("Intervalo parado após 5 execuções");
  }
}, 1000);
