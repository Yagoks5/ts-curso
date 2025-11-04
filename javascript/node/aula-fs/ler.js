// crie um código para ler arquivos pelo node. já tenho os arquivos criados (.json e txt)
const fs = require("fs");
const path = require("path");

const caminhoArquivo = path.join(__dirname, "teste.json");

// Código para ler o arquivo
fs.readFile(caminhoArquivo, "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }
  console.log("Conteúdo do arquivo:", data);
});
