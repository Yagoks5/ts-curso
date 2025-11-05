import { FreteNormal, FreteExpresso, CalculadoraFrete } from "./strategy";
import { Usuario, CanalNotificacao } from "./observer";
import {
  Luz,
  ComandoLigarLuz,
  ComandoDesligarLuz,
  ControleRemoto,
} from "./command";
import { Carro, EstadoParado, EstadoAndando } from "./state";
import { SuporteBasico, SuporteAvancado } from "./chain";
import { ColecaoNumeros } from "./iterator";
import { Sala, Participante } from "./mediator";
import { Editor, Cuidador } from "./memento";

export function runBehavioralExamples() {
  console.log("\n=== Behavioral Patterns Examples ===\n");

  console.log("-- Strategy --");
  const calc = new CalculadoraFrete(new FreteNormal());
  console.log("Frete normal (10):", calc.calcular(10));
  calc.setEstrategia(new FreteExpresso());
  console.log("Frete expresso (10):", calc.calcular(10));

  console.log("\n-- Observer --");
  const canal = new CanalNotificacao();
  const u1 = new Usuario("Ana");
  const u2 = new Usuario("Bruno");
  canal.inscrever(u1);
  canal.inscrever(u2);
  canal.notificar("Nova mensagem disponível");

  console.log("\n-- Command --");
  const luz = new Luz();
  const ligar = new ComandoLigarLuz(luz);
  const desligar = new ComandoDesligarLuz(luz);
  const controle = new ControleRemoto();
  controle.setComando(ligar);
  controle.pressionar();
  controle.setComando(desligar);
  controle.pressionar();

  console.log("\n-- Iterator --");
  const col = new ColecaoNumeros([1, 2, 3]);
  const it = col.criarIterador();
  let n = it.next();
  while (!n.done) {
    console.log("item", n.value);
    n = it.next();
  }

  console.log("\n-- Mediator --");
  const sala = new Sala();
  const p1 = new Participante("Carlos");
  const p2 = new Participante("Mariana");
  sala.entrar(p1);
  sala.entrar(p2);
  p1.enviar("Olá, pessoal!");

  console.log("\n-- Memento --");
  const editor = new Editor();
  const cuidador = new Cuidador();
  editor.escrever("Primeira linha. ");
  cuidador.adicionar(editor.salvar());
  editor.escrever("Mais texto.");
  editor.mostrar();
  editor.restaurar(cuidador.pegar(0));
  editor.mostrar();

  console.log("\n-- State --");
  const carro = new Carro();
  carro.agir();
  carro.setEstado(new EstadoAndando());
  carro.agir();

  console.log("\n-- Chain of Responsibility --");
  const basico = new SuporteBasico();
  const avancado = new SuporteAvancado();
  basico.setProximo(avancado);
  basico.handle("senha");
  basico.handle("sistema");

  console.log("\n=== End ===\n");
}

export * from "./strategy";
export * from "./observer";
export * from "./command";
export * from "./state";
export * from "./chain";
export * from "./iterator";
export * from "./mediator";
export * from "./memento";
