
// Passando por valor em valores primitivos
function quadrado(x) {

    x = x * x

    return x
}

var y = 10
var resultado = quadrado(y)

console.log(y);
console.log(resultado);

// Passando por valor de objeto
function ligar(maquina) {

    maquina.estaLigada = true 
}

var computador = {

    estaLigada: false
}

ligar(computador)
console.log(computador.estaLigada);


// quando você passa um objeto para uma função, 
// a função não pode alterar a variável de referência 
// para fazer referência a outro objeto
function ligar1(maquina1) {

    maquina1 = {

        estaLigada1: true 
    }
}

var computador1 = {

    estaLigada1: false
}

ligar1(computador1)

console.log(computador1.estaLigada1);