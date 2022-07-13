var mensagem = 'Ola'

function dizer() {
    var mensagem = 'Oi'
    console.log(mensagem);
}
dizer()
console.log(mensagem);

var mensagem1 = 'Ola'

function dizer1() {
    console.log(mensagem);
}
dizer1()

var y = 20

function bar() {
    var y = 200

    function baz() {
        console.log(y);
    }
    baz()
}
bar()

// Global variaveis
function getContar() {
    contar = 10

    return contar
}
console.log(getContar());