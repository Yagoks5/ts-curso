// metodos Object
const pessoa = {
  nome: "Ana",
  idade: 25,
  profissao: "Desenvolvedora",
};

// Object.keys() - Retorna um array com as chaves do objeto
const chaves = Object.keys(pessoa);
console.log("Chaves:", chaves); // ['nome', 'idade', 'profissao']

// Object.values() - Retorna um array com os valores do objeto
const valores = Object.values(pessoa);
console.log("Valores:", valores); // ['Ana', 25, 'Desenvolvedora']

// Object.entries() - Retorna um array de arrays, onde cada array interno contém uma chave e seu valor correspondente
const entradas = Object.entries(pessoa);
console.log("Entradas:", entradas);
// [['nome', 'Ana'], ['idade', 25], ['profissao', 'Desenvolvedora']]

// Object.assign() - Copia os valores de todas as propriedades enumeráveis de um ou mais objetos fonte para um objeto destino
const pessoaCopia = Object.assign({}, pessoa);
console.log("Cópia do objeto pessoa:", pessoaCopia);
// { nome: 'Ana', idade: 25, profissao: 'Desenvolvedora' }

// Object.freeze() - Congela um objeto, impedindo alterações em suas propriedades
Object.freeze(pessoa);
pessoa.idade = 30; // Tentativa de alterar a propriedade 'idade'
console.log("Após tentativa de alteração:", pessoa.idade); // 25

// Object.seal() - Sela um objeto, impedindo a adição ou remoção de propriedades, mas permitindo a modificação das existentes
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
};
Object.seal(carro);
carro.modelo = "Camry"; // Modificação permitida
delete carro.marca; // Tentativa de remoção não permitida
console.log("Carro após modificações:", carro);
// { marca: 'Toyota', modelo: 'Camry' }

// Object.getOwnPropertyNames() - Retorna um array com todas as propriedades (enumeráveis ou não) de um objeto
const propriedades = Object.getOwnPropertyNames(pessoa);
console.log("Propriedades do objeto pessoa:", propriedades);
// ['nome', 'idade', 'profissao']

// Object.hasOwn() - Verifica se um objeto possui uma propriedade específica
const temNome = Object.hasOwn(pessoa, "nome");
console.log("O objeto pessoa tem a propriedade 'nome'?", temNome); // true
