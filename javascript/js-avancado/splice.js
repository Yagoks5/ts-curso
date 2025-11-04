const nomes = ["Ana", "Ju", "Leo", "Paula"];

const removidos = nomes.splice(2, 1);

//

const adicionando = nomes.splice(3, 0, "Rodrigo");
console.log(nomes, adicionando);
// adiciona no indice 3, remove 0 elementos e adiciona "Rodrigo"
