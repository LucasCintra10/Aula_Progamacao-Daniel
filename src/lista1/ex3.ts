class produto {
    id: number;
    desc: string;
    qtde: number;
    preco: number;

    constructor(id: number, desc: string, qtde: number, preco: number) {
        this.id = id;
        this.desc = desc;
        this.qtde = qtde;
        this.preco = preco;
    }

    comprar(qtde_compra: number): void {
        this.qtde += qtde_compra
    }

    vender(qtde_venda: number): void {
        this.qtde -= qtde_venda
    }

    subir_preco(ajuste: number): void {
        this.preco += ajuste
    }

    baixar_preco(ajuste: number): void {
        this.preco -= ajuste
    }

    exibir_produto(): string {
        return `ID: ${this.id} Descrição: ${this.desc} Quantidade: ${this.qtde} Preço: R$ ${this.preco}`
    }
}

let obj_1 = new produto(123, 'Lanche', 3, 22)
console.log(obj_1.exibir_produto())