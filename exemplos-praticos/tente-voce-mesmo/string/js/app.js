// calcular o comprimento da corda
var texto = "Olá Mundo!"
document.write('<p>' + texto.length + '</p>')

var texto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
document.write('<p>' + texto.length + '</p>')

var texto = "1234567890"
document.write('<p>' + texto.length + '</p>')

// Encontrar uma string em uma string
function minhaFuncao() {
    var str = document.querySelector('#p1').innerHTML
    var n = str.indexOf('localizar')

    document.querySelector('#p2').innerHTML = n + 1
}

var str = 'Olá mundo!'

// Math é um objeto embutido que tem propriedades 
// e métodos para constantes e funções matemáticas. 
//Não é um objeto de função.
document.write(str.match('mundo') + '<br>')
document.write(str.match('Mundo') + '<br>')
document.write(str.match('mundo!'))


// Substituir o conteúdo
// replace() substitui alguns caracteres de uma string
function minhaFuncaoReplace() {
    var str = document.querySelector('#demo').innerHTML
    var texto = str.replace("GITHUB", "https://github.com/diegotpereira")

    document.querySelector('#demo').innerHTML = texto
}

// convertido em letras maiúsculas ou minusculas
var texto = 'OLá Mundo!'
document.write('<p>' + texto.toUpperCase() + '</p>')
document.write('<p>' + texto.toLowerCase() + '</p>')
document.write('<p>' + texto + '</p>')

var texto2 = 'Este método retorna uma nova string, a string de origem não foi alterada'
document.write('<p>' + texto2 + '</p>')

// conversão de String para um array
function meuArrayConvertido() {
    var str = 'a, b, c, d, e, f'
    var n = str.split(',')

    document.querySelector('#demo1').innerHTML = n[0]
}