// operador-coalescencia-nula.ts
function obterValor(valor: string | null | undefined): string {
  // Não sou espanhol.
  return valor ?? "Valor padrão";
}

// Exemplos de uso
console.log(obterValor("Olá")); // Saída: "Olá"
console.log(obterValor(null)); // Saída: "Valor padrão"
console.log(obterValor(undefined)); // Saída: "Valor padrão"
