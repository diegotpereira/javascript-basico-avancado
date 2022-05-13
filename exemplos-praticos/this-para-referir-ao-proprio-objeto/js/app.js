let carro = {

    // propriedades
    marca: 'Fiat',
    modelo: 'Uno',
    ligado: false,

    // metodos
    ligar: function() {
        this.ligado = true
        document.querySelector('#resultado').innerHTML = "O " + this.modelo + " está ligado"
    },
    acelerar: function() {
        if (this.ligado == true) {
            document.querySelector('#resultado').innerHTML = "O " + this.modelo + " está acelerando"
        } else {
            document.querySelector('#resultado').innerHTML = "Ligue o carro primeiro"
        }
    },
    desligar: function() {
        this.ligado = false
        document.querySelector("#resultado").innerHTML = "O " + this.marca + " está desligado"
    }
}