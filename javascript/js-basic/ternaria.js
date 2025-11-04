let numero = 7;

numero === 5 ? console.log("O número é 5") : console.log("O número não é 5");

const pontuacaoUsuario = 1000;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário Normal";

console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || "Preto";

console.log(corPadrao);
