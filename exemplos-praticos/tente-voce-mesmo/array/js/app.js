// matriz de objetos
var index 
var meuCarro = new Array()
meuCarro[0] = 'golf'
meuCarro[1] = 'Volkswagen'
meuCarro[2] = 'VW'

var texto = "matriz de objetos"
document.write(texto + '<br>')

for(index = 0; index < meuCarro.length; index++) {
  
    document.write(meuCarro[index] + '<br>')
}

// Criar novo método
Array.prototype.myUcase =  function() {
    for(index = 0; index < this.length; index++) {
        this[index] = this[index].toUpperCase()
    }
}

function minhaFuncaoMetodo() {
    var frutas = ['Banana', 'Laranja', 'Maça', 'Morango']
    frutas.myUcase()

    var x = document.querySelector('#demo')
    x.innerHTML = frutas
}

// Mesclar três matrizes - concat ()
var parentes = ['Júnior', 'Vera']
var irmaos = ['Djonata', 'Rafaela']
var filhos = ['Duda', 'Bruna', 'Cristian']
var familia = parentes.concat(irmaos, filhos)

document.write('<p>')
document.write('Minha Familia é ' + '<br>')
document.write(familia)

// Adicionado ao final de uma série de novos elementos - push ()
var frutas = ['Banana', 'Laranja'], 
function meuPush() {

}