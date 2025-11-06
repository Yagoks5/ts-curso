/**
 * Singleton
 *
 * O que é:
 * - Garante que uma classe tenha apenas uma única instância e fornece um
 *   ponto de acesso global para essa instância.
 *
 * Para que serve / Quando usar:
 * - Quando é necessário um único ponto de controle/coordenação (ex.: pool de
 *   conexões, gerenciador de configuração, cache global).
 * - Usar com cautela: singletons podem introduzir estado global e dificultar
 *   testes se abusados.
 */

export class Database {
  private static instance: Database;
  private constructor() {
    console.log("Conectando ao banco...");
  }

  static getInstance(): Database {
    if (!Database.instance) Database.instance = new Database();
    return Database.instance;
  }

  query(sql: string) {
    console.log("Executando query:", sql);
    return [] as any[];
  }
}
