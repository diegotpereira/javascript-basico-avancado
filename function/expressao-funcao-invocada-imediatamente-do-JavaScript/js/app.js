// function adicionar(a, b) {
//     return a + b
// }
// console.log(window.adicionar);

// var contar = 10

// console.log(window.contar);

// // isso é uma string 
// (10 + 20)
// let soma = function(a, b) {
//     return a + b
// }
// let soma = (function(a,b) {
//     return a + b
// })
// let soma = (function(a,b) {
//     return a + b
// })(10, 20)

// console.log(soma);

// function adicionar() {
//     return 'add'
// }
// let resultado = adicionar(10, 20)

// console.log(resultado);

const calculadora = (function() {
    function adicionar(a, b) {
        return a + b
    }
    function multiplicar(a, b) {
        return a * b
    }
    return {
        adicionar: adicionar,
        multiplicar: multiplicar
    }
})()

