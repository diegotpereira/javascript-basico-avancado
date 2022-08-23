let fileiras = ['A', 'B', 'C']

fileiras.forEach(function(e) {

    console.log(e);
})

function Contadora() {
    this.contar = 0
    let self = this
    return {

        incrementar: function() {

            self.contar++
        },
        atual: function() {

            return self.contar
        },
        redefinir: function() {

            self.contar = 0
        }
    }
}

var contadora = new Contadora()
var numeros = [1, 2, 3]
var soma = 0

numeros.forEach(function(e) {

    soma += e 
    this.incrementar()
}, contadora)

console.log(soma);
console.log(contadora.atual());