const fs = require("fs").promises;
const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const pessoas = [
  { nome: "João" },
  { nome: "Maria" },
  { nome: "José" },
  { nome: "Ana" },
  { nome: "Pedro" },
  { nome: "Carla" },
  { nome: "Lucas" },
];

const json = JSON.stringify(pessoas, "", 2);

fs.writeFile(caminhoArquivo, json, { flag: "w" });
