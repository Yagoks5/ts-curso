// de um exemplo de uso do operador typeof e keyof em TypeScript
type Pessoa = {
  nome: string;
  idade: number;
  profissao: string;
};

// Usando keyof para criar um tipo que representa as chaves do tipo Pessoa
type ChavesPessoa = keyof Pessoa; // "nome" | "idade" | "profissao"

// Usando typeof para obter o tipo de uma variável
const pessoaExemplo: Pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Engenheiro",
};

type TipoPessoaExemplo = typeof pessoaExemplo; // Tipo equivalente a Pessoa
