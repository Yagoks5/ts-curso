export class Participante {
  constructor(public nome: string, private sala?: Sala) {}
  enviar(msg: string) {
    this.sala?.enviar(msg, this);
  }
  receber(msg: string, de: Participante) {
    console.log(`${this.nome} recebeu de ${de.nome}: ${msg}`);
  }
  setSala(sala: Sala) {
    this.sala = sala;
  }
}

export class Sala {
  private usuarios: Participante[] = [];
  entrar(p: Participante) {
    this.usuarios.push(p);
    p.setSala(this);
  }
  enviar(msg: string, de: Participante) {
    this.usuarios.forEach((u) => {
      if (u !== de) u.receber(msg, de);
    });
  }
}
