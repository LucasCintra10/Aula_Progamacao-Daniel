// Criação da classe aluno c/ o construtor

class Aluno {
    numeroAluno: number;
    nome: string;
    idade: number;
    p1: number;
    p2: number;

    constructor(numeroAluno: number, nome: string, idade: number, p1: number, p2: number) {
        this.numeroAluno = numeroAluno;
        this.nome = nome;
        this.idade = idade;
        this.p1 = p1;
        this.p2 = p2;
    }

    // Método para exibir os dados do aluno cadastrado

    dadosAluno(): void {
        console.log(`Nome: ${this.nome}`)
        console.log(`Numero do aluno: ${this.numeroAluno}`)
        console.log(`Idade: ${this.idade}`)
    }

    // Método para o cálculo da média do aluno

    notaFinal(): number {
        let nota = (this.p1 + this.p2) / 2
        console.log(`A média final: ${nota}`)
        return nota
    }

    // Método para a verificação se o aluno foi aprovado ou reprovado de acordo com o valor da média

    passou(): void {
        let nota = this.notaFinal()
        if (nota > 6) {
            console.log(`Aluno Aprovado!`)
        }
        else {
            console.log(`Aluno Reprovado!`)
        }
    }
}

// Classe para o cadastro do aluno e execução de todos métodos criados anteriormente 

class testaAluno {
    main(numeroAluno: number, nome: string, idade: number, p1: number, p2: number): void {
        let aluno = new Aluno(numeroAluno, nome, idade, p1, p2)
        aluno.dadosAluno()
        aluno.notaFinal()
        aluno.passou()
    }
}

let aluno = new testaAluno();
aluno.main(1234, 'Lucas', 25, 8, 9)






