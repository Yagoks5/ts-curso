class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }

  // Método de instância
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático -> metodo da classe, não da instancia.
  static trocaPilha() {}
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
console.log(controle1.volume); // 2

const controle2 = new ControleRemoto("Samsung");
controle2.diminuirVolume();
console.log(controle2.volume); // -2

// Chamada do método estático
ControleRemoto.trocaPilha();
// pra que serve um método estático?
// R: Um método estático é associado à classe em si, e não às instâncias da classe.
//  Ele pode ser chamado sem a necessidade de criar uma instância da classe.
// Isso é útil para funcionalidades que não dependem do estado de uma instância específica.
