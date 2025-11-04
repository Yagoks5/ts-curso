// crie uma Promise
const minhaPromise = new Promise((resolve, reject) => {
  const sucesso = false; // altere para false para testar o rejeito

  if (sucesso) {
    resolve("A promessa foi cumprida com sucesso!");
  } else {
    reject("A promessa foi rejeitada.");
  }
});

// consuma a Promise
minhaPromise
  .then((mensagem) => {
    console.log(mensagem); // será executado se a promessa for cumprida
  })
  .catch((erro) => {
    console.error(erro); // será executado se a promessa for rejeitada
  });
