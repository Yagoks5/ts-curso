// type-alias
type Aluno = {
  nome: string;
  idade: number;
  serie: string;
};

const shimba: Aluno = {
  nome: "Shimba",
  idade: 16,
  serie: "3ª série do ensino médio",
};

console.log(shimba);

type Pessoa = {
  nome: string;
  idade: number;
  profissao: string;
};

const pessoa1: Pessoa = {
  nome: "Alice",
  idade: 30,
  profissao: "Engenheira",
};
