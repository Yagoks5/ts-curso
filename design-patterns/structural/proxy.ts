/**
 * Proxy (Padrão Proxy)
 *
 * O que é:
 * - Fornece um objeto substituto ou representante que controla o acesso a
 *   outro objeto, podendo adicionar comportamentos como autenticação,
 *   cache, logging ou lazy-loading.
 *
 * Para que serve / Quando usar:
 * - Controlar ou restringir o acesso a um recurso caro ou sensível.
 * - Adicionar funcionalidades transversais sem modificar o objeto real.
 */

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
