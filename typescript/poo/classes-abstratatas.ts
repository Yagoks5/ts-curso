export abstract class Personagem {
  protected nome: string;
  protected ataque: number;
  protected vida: number;

  constructor(nome: string, ataque: number, vida: number) {
    this.nome = nome;
    this.ataque = ataque;
    this.vida = vida;
  }

  abstract atacar(inimigo: Personagem): void;

  receberDano(dano: number): void {
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano.`);
  }

  abstract bordao(): void;
}

export class Guerreiro extends Personagem {
  constructor(nome: string, ataque: number, vida: number) {
    super(nome, ataque, vida);
  }

  atacar(inimigo: Personagem): void {
    inimigo.receberDano(this.ataque);
    console.log(`${this.nome} atacou com uma espada!`);
  }

  bordao(): void {
    console.log("Por Odin!");
  }
}

export class Mago extends Personagem {
  constructor(nome: string, ataque: number, vida: number) {
    super(nome, ataque, vida);
  }

  atacar(inimigo: Personagem): void {
    inimigo.receberDano(this.ataque);
    console.log(`${this.nome} lançou um feitiço!`);
  }

  bordao(): void {
    console.log("Pelos poderes arcanos!");
  }
}

const guerreiro = new Guerreiro("Aragorn", 15, 100);
const mago = new Mago("Gandalf", 20, 80);

guerreiro.bordao();
mago.bordao();

// por que precisa ser classes abstratas?
// As classes abstratas permitem definir um contrato para as subclasses
// garantindo que elas implementem certos métodos. Isso é útil em um jogo,
// por exemplo, onde diferentes tipos de personagens (como guerreiros e magos)
// devem ter comportamentos específicos, mas ainda compartilham uma interface comum.
// por que não usar interface?
// As interfaces em TypeScript não podem fornecer implementação de métodos,
// apenas a assinatura. Isso significa que, se quisermos ter um comportamento
// padrão (como a lógica de receber dano), teríamos que duplicar esse código
// em cada classe que implementa a interface. Com classes abstratas, podemos
// definir esse comportamento uma vez e reutilizá-lo em todas as subclasses.
