/**
 * Runner e exportações para os exemplos de padrões creacionais.
 *
 * Este arquivo orquestra a execução dos exemplos nos módulos individuais
 * (singleton, builder, factoryMethod, abstractFactory, prototype). Cada
 * módulo contém um comentário explicativo sobre o padrão demonstrado.
 */

import { Database } from "./singleton";
import { User, UserBuilder } from "./builder";
import {
  Transporte,
  Caminhao,
  Navio,
  LogisticaRodoviaria,
  LogisticaMaritima,
} from "./factoryMethod";

import {
  Cadeira,
  Mesa,
  FabricaModerna,
  FabricaVitoriana,
} from "./abstractFactory";
import { Persona } from "./prototype";

export function runCreationalExamples() {
  console.log("\n=== Creational Patterns Examples ===\n");

  console.log("-- Singleton --");
  const db1 = Database.getInstance();
  const db2 = Database.getInstance();
  console.log("same instance?", db1 === db2);

  console.log("\n-- Builder --");
  const user = new UserBuilder()
    .setName("Alice")
    .setAge(30)
    .setAddress("Rua A")
    .build();
  console.log("User:", user);

  console.log("\n-- Factory Method --");
  const rodoviaria = new LogisticaRodoviaria();
  rodoviaria.planearEntrega?.();
  // fallback to older method name for compatibility
  if ((rodoviaria as any).planejarEntrega)
    (rodoviaria as any).planejarEntrega();

  const maritima = new LogisticaMaritima();
  maritima.planearEntrega?.();
  if ((maritima as any).planejarEntrega) (maritima as any).planejarEntrega();

  console.log("\n-- Abstract Factory --");
  const moderna = new FabricaModerna();
  const cadeira = moderna.criarCadeira();
  const mesa = moderna.criarMesa();
  cadeira.sentar();
  mesa.usar();

  const vitoriana = new FabricaVitoriana();
  vitoriana.criarCadeira().sentar();
  vitoriana.criarMesa().usar();

  console.log("\n-- Prototype --");
  const p1 = new Persona("João", 40);
  const p2 = p1.clone();
  console.log("p1 === p2 ?", p1 === p2, "p2:", p2);

  console.log("\n=== End ===\n");
}

// also export some symbols for direct tests or reuse
export { Database };
export { User, UserBuilder };
export { Transporte, Caminhao, Navio };
export { Persona };
