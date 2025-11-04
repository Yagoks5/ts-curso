// defineProperty.js - defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, // pode alterar o valor
    configurable: false, // configurável
  });

  Object.defineProperties(this, {
    nome: {
      // define várias propriedades
      enumerable: true, // mostra a chave
      writable: true, // pode alterar o valor
      configurable: true, // configurável
    },
    preco: {
      // define várias propriedades
      enumerable: true,
      writable: true,
      configurable: true,
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);

// isso era feito antigamente?
