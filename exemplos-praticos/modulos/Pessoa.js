export default class Pessoa {

    constructor(nome) {

        if (nome === undefined || nome.length <= 0) {
            
            throw new Error("O campo nome é obrigatório para pessoa.");
        }

        this.nome = nome;
    }

    apresentar() {

        console.log(`Olá, meu nome é ${this.nome}`);
    }
}