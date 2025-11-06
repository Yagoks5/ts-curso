# Design Patterns (Creational) - TypeScript examples

Este diretório contém implementações didáticas em TypeScript de padrões creacionais.

Padrões incluídos:

- Singleton
- Builder
- Factory Method
- Abstract Factory
- Prototype

Arquivos principais

- `singleton.ts` — implementação simples da classe `Database` (Singleton).
- `builder.ts` — `User` e `UserBuilder` para montar objetos com API encadeada.
- `factoryMethod.ts` — hierarquia `Transporte` e `Logistica` demonstrando Factory Method.
- `abstractFactory.ts` — `FabricaModerna` e `FabricaVitoriana` com `Cadeira`/`Mesa`.
- `prototype.ts` — demonstração de clonagem (Prototype).
- `index.ts` — `runCreationalExamples()` que executa todos os exemplos.

## O que são padrões creacionais

Padrões creacionais tratam de como objetos são criados. Eles abstraem e
organizam a lógica de criação para tornar o sistema mais flexível, reutilizável
e independente da forma concreta de instanciação.

Para que servem:

- Encapsular a lógica de criação de objetos complexos.
- Evitar acoplamento direto entre código cliente e classes concretas.
- Fornecer maneiras padronizadas de controlar instâncias (ex.: Singleton),
  criar famílias de objetos relacionados (Abstract Factory) ou construir
  objetos passo a passo (Builder).

Cada arquivo neste diretório contém um comentário no topo explicando o padrão
específico demonstrado naquele módulo.
