// pilares POO: Encapsulamento, Herança, Polimorfismo e Abstração

// Encapsulamento
class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  public sacar(valor: number): boolean {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  public getSaldo(): number {
    return this.saldo;
  }
}

// Herança
class ContaPoupanca extends ContaBancaria {
  private taxaJuros: number;

  constructor(saldoInicial: number, taxaJuros: number) {
    super(saldoInicial);
    this.taxaJuros = taxaJuros;
  }

  public aplicarJuros(): void {
    const juros = (this.getSaldo() * this.taxaJuros) / 100;
    this.depositar(juros);
  }
}

// Polimorfismo
class ContaCorrente extends ContaBancaria {
  private limiteChequeEspecial: number;

  constructor(saldoInicial: number, limiteChequeEspecial: number) {
    super(saldoInicial);
    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  public sacar(valor: number): boolean {
    if (valor > 0 && valor <= this.getSaldo() + this.limiteChequeEspecial) {
      const novoSaldo = this.getSaldo() - valor;
      novoSaldo < 0 ? super.sacar(this.getSaldo()) : super.sacar(valor);
      return true;
    }
    return false;
  }
}

// Abstração
abstract class Funcionario {
  protected nome: string;
  protected salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  public abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
  public calcularBonus(): number {
    return this.salario * 0.1;
  }
}

class Desenvolvedor extends Funcionario {
  public calcularBonus(): number {
    return this.salario * 0.05;
  }
}

// Exemplo de uso
const contaPoupanca = new ContaPoupanca(1000, 5);
contaPoupanca.aplicarJuros();
console.log(`Saldo da Conta Poupança: ${contaPoupanca.getSaldo()}`);

const contaCorrente = new ContaCorrente(500, 200);
contaCorrente.sacar(600);
console.log(`Saldo da Conta Corrente: ${contaCorrente.getSaldo()}`);

const gerente = new Gerente("Alice", 8000);
console.log(`Bônus do Gerente: ${gerente.calcularBonus()}`);

const desenvolvedor = new Desenvolvedor("Bob", 5000);
console.log(`Bônus do Desenvolvedor: ${desenvolvedor.calcularBonus()}`);

// pra que serve o static?
// O static em TypeScript (e em outras linguagens de programação orientadas a objetos) é usado para definir membros (propriedades ou métodos) que pertencem à classe em si
//  e não a instâncias específicas dessa classe.
// Isso significa que você pode acessar esses membros sem precisar criar uma instância da classe.
class Calculadora {
  static somar(a: number, b: number): number {
    return a + b;
  }

  static subtrair(a: number, b: number): number {
    return a - b;
  }
}

const resultadoSoma = Calculadora.somar(10, 5);
const resultadoSubtracao = Calculadora.subtrair(10, 5);
console.log(`Resultado da Soma: ${resultadoSoma}`);
console.log(`Resultado da Subtração: ${resultadoSubtracao}`);
