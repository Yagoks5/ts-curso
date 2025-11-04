// explique break e continue

// Exemplo de uso do break
console.log("Exemplo de break:");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Break no i =", i);
    break; // Sai do loop quando i é 5
  }
  console.log(i);
}

// Exemplo de uso do continue
console.log("\nExemplo de continue:");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("Continue no i =", i);
    continue; // Pula para a próxima iteração quando i é par
  }
  console.log(i); // Isso só será executado para valores ímpares de i
}
