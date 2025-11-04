function criarContador() {
  let contador = 0; // variável da função externa

  function incrementar() {
    contador++; // acessa a variável externa
    console.log(contador);
  }

  return incrementar; // retorna a função interna
}

const meuContador = criarContador(); // cria um closure

meuContador(); // 1
meuContador(); // 2
meuContador(); // 3
