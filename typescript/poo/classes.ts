class Empresa {
  private nome: string;

  private cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
}

const empresa1 = new Empresa("Tech Solutions", "12.345.678/0001-99");
