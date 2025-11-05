import { ApiAntiga, ApiNova, ApiAdapter } from "./adapter";
import { Cafe, CafeSimples, LeiteDecorator } from "./decorator";
import { SubsistemaA, SubsistemaB, FacadeSistema } from "./facade";
import { Servico, ServicoReal, ProxyServico } from "./proxy";
import { Dispositivo, TV, Radio, ControleRemoto } from "./bridge";
import { Arquivo, Pasta } from "./composite";
import { ArvoreFactory, Arvore } from "./flyweight";

export function runStructuralExamples() {
  console.log("\n=== Structural Patterns Examples ===\n");

  console.log("-- Adapter --");
  const antiga = new ApiAntiga();
  antiga.sendData("olá");
  const adapter = new ApiAdapter();
  adapter.sendData("mundo");

  console.log("\n-- Decorator --");
  const simples: Cafe = new CafeSimples();
  console.log(simples.descricao(), "-", simples.custo());
  const comLeite = new LeiteDecorator(simples);
  console.log(comLeite.descricao(), "-", comLeite.custo());

  console.log("\n-- Facade --");
  const facade = new FacadeSistema();
  facade.inicializar();

  console.log("\n-- Proxy --");
  const proxy = new ProxyServico();
  proxy.requisitar();
  proxy.autenticar();
  proxy.requisitar();

  console.log("\n-- Bridge --");
  const tv = new TV();
  const radio = new Radio();
  const controleTv = new ControleRemoto(tv);
  const controleRadio = new ControleRemoto(radio);
  controleTv.ligar();
  controleRadio.ligar();

  console.log("\n-- Composite --");
  const pastaRaiz = new Pasta("root");
  const arquivo1 = new Arquivo("file1.txt");
  const sub = new Pasta("sub");
  sub.adicionar(new Arquivo("file2.txt"));
  pastaRaiz.adicionar(arquivo1);
  pastaRaiz.adicionar(sub);
  pastaRaiz.mostrar();

  console.log("\n-- Flyweight --");
  const a1 = ArvoreFactory.getArvore("pinheiro", "alta", "verde");
  const a2 = ArvoreFactory.getArvore("pinheiro", "alta", "verde");
  console.log("mesma instância?", a1 === a2);

  console.log("\n=== End ===\n");
}

export {
  ApiAntiga,
  ApiNova,
  ApiAdapter,
  Cafe,
  CafeSimples,
  LeiteDecorator,
  SubsistemaA,
  SubsistemaB,
  FacadeSistema,
  Servico,
  ServicoReal,
  ProxyServico,
  Dispositivo,
  TV,
  Radio,
  ControleRemoto,
  Arquivo,
  Pasta,
  ArvoreFactory,
  Arvore,
};
