class carro {
    modelo: string;
    marca: string;
    ano: number;
    cor: string;
    motor: boolean; 

    ligarMotor() : void {
      this.motor = true
    }

    deixarCarroNovo() : void {
      this.ano -= 4
    }

    // CONSTRUTOR

    constructor (modelo: string, cor: string, ano: number, marca: string, motor: boolean){
      this.modelo = modelo;
      this.cor = cor;
      this.ano = ano;
      this.marca = marca;
      this.motor = motor;
    }
  }

  // Criando 
  
  let obj1 = new carro('Onix', 'Preto', 2019, 'GM', true);
  console.log(obj1)

  let obj2 = new carro('Palio', 'Azul', 2016, 'Fiat', false);
  obj1.ano = 2016;
  obj1.cor = "Azul";
  obj1.modelo = "Palio";
  obj1.marca = "Fiat";
  obj1.motor = false;
  
  