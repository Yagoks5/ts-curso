// Funções Imediatas
(function () {
  console.log("Isso é uma função imediata");
})();

// não entendi muito bem a utilidade disso
// usada em código legado
// usada para não poluir o escopo global
// usada para criar módulos
// usada para criar closures

// me de um exemplo de uso em código legado
(function () {
  var nome = "João";
  console.log("Olá, " + nome);
})();
