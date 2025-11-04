const alunos = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie"];

alunos.push("Bruna"); // Adiciona um elemento ao final do array
alunos.unshift("Carlos"); // Adiciona um elemento ao início do array
// mostre os metodos de array.
alunos.pop(); // Remove o último elemento do array
alunos.shift(); // Remove o primeiro elemento do array
alunos.splice(1, 2); // Remove elementos a partir do índice 1, removendo 2 elementos
alunos.splice(2, 0, "Fabiana", "Renan"); // Adiciona elementos a partir do índice 2, sem remover nenhum elemento

console.log(alunos);
console.log(alunos.length); // Mostra o tamanho do array
console.log(alunos[0]); // Acessa o primeiro elemento do array
console.log(alunos[alunos.length - 1]); // Acessa o último elemento do array

const alunos2 = ["Juliana", "Ana", "Caio"];
const todosAlunos = alunos.concat(alunos2); // Concatena dois arrays

console.log(todosAlunos);
