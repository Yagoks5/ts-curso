export class ColecaoNumeros {
  constructor(private items: number[] = []) {}
  adicionar(n: number) {
    this.items.push(n);
  }
  criarIterador() {
    let index = 0;
    const items = this.items;
    return {
      next(): { value?: number; done: boolean } {
        if (index < items.length) return { value: items[index++], done: false };
        return { done: true };
      },
    };
  }
}
