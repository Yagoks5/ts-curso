// Singleton - GoF Pattern | Factory Method
export class Database {
  static database: Database;

  private host: string;
  private user: string;
  private password: string;

  private constructor(host: string, user: string, password: string) {
    this.host = host;
    this.user = user;
    this.password = password;
  }

  connect(): void {
    console.log(
      `Conectando ao banco de dados em ${this.host} com o usuário ${this.user}`
    );
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (!Database.database) {
      Database.database = new Database(host, user, password);
    }
    return Database.database;
  }
}

const db1 = Database.getDatabase("localhost", "root", "1234");
const db2 = Database.getDatabase("localhost2", "admin", "4321");

console.log(db1 === db2); // true
console.log(db1, db2);

db1.connect();
db2.connect();
