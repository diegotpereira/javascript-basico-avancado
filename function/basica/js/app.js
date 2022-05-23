function exibeMensagem() {
    alert('Atenção')
}
exibeMensagem()

// função com parametros
function exibirMensagem(mensagem) {
    alert(mensagem)
}
exibirMensagem("Javascript")


function somaDoisNumeros(numero1, numero2) {
    alert(numero1 + numero2)
}
somaDoisNumeros(10, 20)
somaDoisNumeros(100, 20)
somaDoisNumeros(45, 35)

// Função com retorno
function somarDoisNumeros(numero1, numero2) {
    alert(numero1, numero2)
}
var numero = 80 

somarDoisNumeros(10, 20)

function subDoisNumeros(numero1, numero2) {
    return numero1 + numero2
}
var numero = 80

var resultado = subDoisNumeros(10, 20)

alert(numero - resultado)