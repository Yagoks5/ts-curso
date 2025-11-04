// log-class.decorator.ts

function LogClass(target: Function) {
  // O 'target' (alvo) é a função construtora da classe.

  const className = (target as any).name;

  console.log(`[DECORATOR]: A classe "${className}" foi inicializada!`);
  console.log(`[DECORATOR]: Seu alvo é:`, target);
}

// user.ts

@LogClass // <-- Nosso Decorator aplicado aqui!
class User {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log(`[CLASSE]: Novo usuário criado: ${name}`);
  }
}

// Criando uma instância da classe, o Decorator JÁ FOI EXECUTADO ANTES DESTA LINHA
const newUser = new User("Alice", 30);
