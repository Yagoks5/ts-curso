class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (!this.ligado) {
      this.ligado = true;
      console.log(`${this.nome} está ligado.`);
    } else {
      console.log(`${this.nome} já está ligado.`);
    }
  }

  desligar() {
    if (this.ligado) {
      this.ligado = false;
      console.log(`${this.nome} está desligado.`);
    } else {
      console.log(`${this.nome} já está desligado.`);
    }
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }

  ligar() {
    console.log("Iniciando o smartphone...");
  }
}

const s1 = new Smartphone("iPhone", "preto", "12");
s1.ligar();
console.log(s1);
s1.ligar();
