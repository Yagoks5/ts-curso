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
