export interface Servico {
  requisitar(): void;
}

export class ServicoReal implements Servico {
  requisitar() {
    console.log("Executando serviço real...");
  }
}

export class ProxyServico implements Servico {
  private servicoReal = new ServicoReal();
  private autorizado = false;
  autenticar() {
    this.autorizado = true;
  }
  requisitar() {
    if (!this.autorizado) {
      console.log("Acesso negado ❌");
      return;
    }
    this.servicoReal.requisitar();
  }
}
