export function paginaInicial(req, res) {
  res.render("index");
}

export function trataPost(req, res) {
  res.send(`Ei, sou sua nova rota de Post! Você enviou: ${req.body.name}`);
}
