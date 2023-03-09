class Cliente {

    numeroConta: number;
    numeroAgencia: number;
    nome: string;
    saldo: number;

    constructor(numeroConta: number, numeroAgencia: number, nome: string, saldo: number) {
        this.numeroConta = numeroConta;
        this.numeroAgencia = numeroAgencia;
        this.nome = nome;
        this.saldo = saldo;
    }

    realizarDeposito(valor: number): void {
        this.saldo += valor
    }

    realizarSaque(valor: number): void {
        this.saldo -= valor
    }

    exibirDados(): void {
        console.log(`Numero da conta: ${this.numeroConta}`);
        console.log(`Numero da Agência: ${this.numeroAgencia}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Saldo: R$ ${this.saldo}`)
    }
}

class testaCliente {
    main(nConta: number, nAgencia: number, nome: string, saldo: number):void {
        let cliente = new Cliente(nConta,nAgencia,nome,saldo)
        cliente.realizarDeposito(10)
        cliente.realizarSaque(5)
        cliente.exibirDados()
    }
}

let fulano = new testaCliente();
fulano.main(123, 1234, 'Lucas', 20);

let beltrano = new testaCliente();
beltrano.main(321, 4321, 'Teste', 100);
