/**
 * Adapter (Padrão Adaptador)
 *
 * O que é:
 * - Permite que interfaces incompatíveis trabalhem juntas convertendo a
 *   interface de uma classe em outra que o cliente espera.
 *
 * Para que serve / Quando usar:
 * - Integrar APIs antigas com novas sem modificar o código cliente.
 * - Adaptar bibliotecas de terceiros para a interface do seu sistema.
 */

export class ApiAntiga {
  sendData(data: string) {
    console.log(`Enviando dados: ${data}`);
  }
}

export class ApiNova {
  post(data: object) {
    console.log("Postando dados:", JSON.stringify(data));
  }
}

export class ApiAdapter extends ApiAntiga {
  private novaApi = new ApiNova();
  sendData(data: string) {
    this.novaApi.post({ conteudo: data });
  }
}
