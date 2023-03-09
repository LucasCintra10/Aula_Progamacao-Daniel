class ClienteEncap {
  private nroConta: string;
  private nroAgencia: string;
  private nome: string;
  private saldo: number;

  constructor(
    nroConta: string,
    nroAgencia: string,
    nome: string,
    saldo: number
  ) {
    this.setNroConta(nroConta);
    this.setNroAgencia(nroAgencia);
    this.setNome(nome);
    this.setSaldo(saldo);
  }

  setNroConta(n: string): void {
    if (n.length == 8 && n.charAt(6) == "-") {
      this.nroConta = n;
    } else {
      console.log("Numero da conta inválido!");
    }
  }
  setNroAgencia(n: string) {
    if (n.length == 6 && n.charAt(4) == "-") {
      this.nroAgencia = n;
    } else {
      console.log("Numero da agência invalido!");
    }
  }
  setNome(n: string) {
    if (n.length <= 30) {
      this.nome = n;
    } else {
      console.log("Nome invalido!");
    }
  }
  setSaldo(n: number) {
    n >= 0 ? (this.saldo = n) : console.log("Saldo inválido!");
  }
  sacar(n: number) {
    this.setSaldo(this.saldo - n);
  }
  depositar(n: number) {
    this.setSaldo(this.saldo + n);
  }
  getNroConta(): string {
    return this.nroConta;
  }
  getNroAgencia(): string {
    return this.nroAgencia;
  }
  getNome(): string {
    return this.nome;
  }
  getSaldo(): number {
    return this.saldo;
  }
}

let fulano_encap = new ClienteEncap("123456-7", "1234-5", "Lucas", 200);
console.log(fulano_encap);
