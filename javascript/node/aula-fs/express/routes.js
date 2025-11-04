import express from "express";
const route = express.Router();
import { paginaInicial, trataPost } from "./src/controllers/homeController.js";
import { paginaContato } from "./src/controllers/contatoController.js";

function meuMiddleware(req, res, next) {
  console.log("Passei no middleware");
  next();
}

//middleware serve para interceptar as requisições? antes de chegar na rota
function meuMiddleware2(req, res, next) {
  console.log("Passei no middleware 2");
  next();
}

// rotas da home
route.get("/", meuMiddleware, meuMiddleware2, paginaInicial);
route.post("/", meuMiddleware, trataPost);

//Rotas de contato
route.get("/contato", meuMiddleware, paginaContato);

export default route;
