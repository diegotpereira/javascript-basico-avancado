function Carro(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.fabricacao = ano
    this.mostrarAno = function() {
        return this.fabricacao
    }
}
meuCarro = new Carro('Nissan', '300ZX', 1992)

carro01 = new Carro('Fiat', 'Uno', 1995)
carro02 = new Carro('Ford', 'Corsel', 1973)
carroEsposa = new Carro('BMW', 'i3', 2020)

console.log('O ano do meu carro é: ' + meuCarro.mostrarAno());
console.log('O ano do carro da minha esposa é: ' + carroEsposa.mostrarAno());
console.log('O ano do carro n° 02 é: ' + carro02.mostrarAno());
console.log('O ano do carro n° 01 é: ' + carro01.mostrarAno());