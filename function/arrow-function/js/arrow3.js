var soma = (a, b) => a + b 

var soma2 = (a, b) => {
    var x = 10

    if (a > b) {
        return 10
    }
    return a + b
}
console.log(soma);
console.log(soma2);

// retorno implicito de objeto
var createObj = () => ({ nome: 'Diego'})
console.log(createObj);

//Arrow Function tem a propriedade de ter o mesmo contexto no qual ela está.
var obj = {
    exibirContext: function exibirContext() {

        // Arrow functions
        setTimeout(() => {
            this.log('depois de 100ms')
        }, 1000)
    },
    log: function log(value) {
        console.log(value);
    }
}
obj.exibirContext()

// parâmetro padrão para a função
function mult(a, b = 1) {
    return a * b
}
console.log(mult(5));

// parâmetro padrão como referência a outro parâmetro
function mult2(a, b = a) {
    return a * b
}
console.log(mult2(5));

// A característica que permite podermos utilizar funções para definir valores de um argumento e a mesma só será invocada quando o argumento for indefinido.)
function numeroAleatorio() {
    return Math.random() * 10
}
function mult3(a, b = numeroAleatorio()) {
    return a * b
}
console.log(mult3(5));