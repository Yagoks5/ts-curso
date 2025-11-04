/// me de exemplos práticos de curto circuito em JavaScript.
// Curto-circuito em JavaScript ocorre quando o operador lógico (&& ou ||) avalia apenas o necessário para determinar o resultado final, sem avaliar o restante da expressão.

// Exemplo com o operador OR (||)
let nome = null;
let nomePadrao = "Visitante";
let nomeFinal = nome || nomePadrao; // Como 'nome' é null, 'nomeFinal' será 'Visitante'
console.log(nomeFinal); // Output: Visitante

// Exemplo com o operador AND (&&)
let usuario = {
  nome: "João",
  idade: 25,
};

let mensagem = usuario && usuario.nome; // Como 'usuario' é um objeto válido, 'mensagem' será 'João'
console.log(mensagem); // Output: João
