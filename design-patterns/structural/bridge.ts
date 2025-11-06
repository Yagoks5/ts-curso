/**
 * Bridge (Padrão Ponte)
 *
 * O que é:
 * - Separa uma abstração da sua implementação, permitindo que ambas variem
 *   independentemente.
 *
 * Para que serve / Quando usar:
 * - Evitar uma explosão de subclasses quando há várias variações de
 *   abstrações e implementações.
 * - Permitir trocar implementações em tempo de execução.
 */

export interface Dispositivo {
  ligar(): void;
  desligar(): void;
}

export class TV implements Dispositivo {
  ligar() {
    console.log("TV ligada 📺");
  }
  desligar() {
    console.log("TV desligada");
  }
}

export class Radio implements Dispositivo {
  ligar() {
    console.log("Rádio ligado 📻");
  }
  desligar() {
    console.log("Rádio desligado");
  }
}

export class ControleRemoto {
  constructor(protected dispositivo: Dispositivo) {}
  ligar() {
    this.dispositivo.ligar();
  }
  desligar() {
    this.dispositivo.desligar();
  }
}
