// encadeamento opcional - Permite acessar propriedades profundamente aninhadas de um objeto sem ter que verificar se cada referência na cadeia é válida.
type Endereco = {
  rua: string;
  cidade: string;
  pais?: {
    nome: string;
    codigo: string;
  };
};

type Usuario = {
  nome: string;
  endereco?: Endereco;
};

const usuario: Usuario = {
  nome: "Maria",
  endereco: {
    rua: "Rua A",
    cidade: "Cidade B",
    pais: {
      nome: "Brasil",
      codigo: "BR",
    },
  },
};

// Usando encadeamento opcional para acessar a propriedade 'codigo' do 'pais'
const codigoPais = usuario.endereco?.pais?.codigo;
