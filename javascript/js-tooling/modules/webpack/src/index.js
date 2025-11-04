import * as MeuModulo from "./modulo1.js";

console.log(MeuModulo.nome);
console.log(MeuModulo.sobrenome);
console.log(MeuModulo.idade);
console.log(MeuModulo.soma(5, 10));

const pessoa = new MeuModulo.Pessoa("Yago", "Ronchi");
console.log(pessoa);
