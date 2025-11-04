// Generics in TypeScript - EM PORTUGUES
function identidade<T>(arg: T): T {
  return arg;
}

let resultado1 = identidade<string>("Olá, Mundo!");
let resultado2 = identidade<number>(42);

console.log(resultado1); // Saída: Olá, Mundo
console.log(resultado2); // Saída: 42

// Usando genéricos com arrays
function imprimirArray<T>(arr: T[]): void {
  arr.forEach((elemento) => console.log(elemento));
}

imprimirArray<number>([1, 2, 3, 4, 5]);
imprimirArray<string>(["um", "dois", "três"]);

// Genéricos com interfaces
interface Par<K, V> {
  chave: K;
  valor: V;
}

let par1: Par<string, number> = { chave: "idade", valor: 30 };
let par2: Par<number, string> = { chave: 1, valor: "um" };

console.log(par1); // Saída: { chave: 'idade', valor: 30 }
console.log(par2); // Saída: { chave: 1, valor: 'um' }

// Genéricos com classes
class Caixa<T> {
  private conteudo: T;

  constructor(conteudo: T) {
    this.conteudo = conteudo;
  }

  obterConteudo(): T {
    return this.conteudo;
  }
}

let caixaDeNumero = new Caixa<number>(100);
let caixaDeString = new Caixa<string>("Generics");

console.log(caixaDeNumero.obterConteudo()); // Saída: 100
console.log(caixaDeString.obterConteudo()); // Saída: Generics

interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 22,
};
