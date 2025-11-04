// Factory functions (Funções Fábrica)
// Função que retorna um objeto
function criarPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala(assunto = "NADA") {
      return `${this.nome} está falando sobre ${assunto}.`;
    },

    altura: altura,
    peso: peso,
    get imc() {
      return (this.peso / this.altura ** 2).toFixed(2);
    },
  };
}

const p2 = criarPessoa("Luiz", "Otávio", 1.8, 80);
console.log(p2);
console.log(p2.fala());
console.log(p2.imc);
