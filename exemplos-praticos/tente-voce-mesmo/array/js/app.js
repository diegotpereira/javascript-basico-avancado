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
    var frutas = ['Banana', 'Laranja', 'Maça', 'Manga']
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

// Remover o último elemento da matriz - pop ()
var frutas = ['Banana', 'Laranja', 'Maça', 'Manga'];
function meuPop() {
    frutas.pop()    

    var x = document.querySelector('#demo1')
    x.innerHTML = frutas
}

// Adicionado ao final de uma série de novos elementos - push ()
var frutas = ['Banana', 'Laranja', 'Maça', 'Manga'];
function meuPush() {
    frutas.push("Abacate")    

    var x = document.querySelector('#demo2')
    x.innerHTML = frutas
}

// A ordem dos elementos em uma matriz inverter o tipo - reverse ()
var frutas = ['Banana', 'Laranja', 'Maça', 'Manga'];
function meuReverse() {
    frutas.reverse()

    var x = document.querySelector('#demo3')
    x.innerHTML = frutas
}

// Remover o primeiro elemento da matriz - shift ()
var frutas = ['Banana', 'Laranja', 'Maça', 'Manga']
function meuShift() {
    frutas.shift()

    var x = document.querySelector('#demo4')
    x.innerHTML = frutas
}


// Escolha a partir de uma matriz de elementos - slice ()
var frutas = ['Banana', 'Laranja', 'Maça', 'Manga']
function meuSlice() {
    var encontre = frutas.slice(0, 2)

    var x = document.querySelector('#demo5')
    x.innerHTML = encontre 
}

// Matriz de classificação (em ordem alfabética crescente) - sort ()
var frutas = ['Manga', 'Laranja', 'Maça', 'Banana']
function meuSort1() {
    frutas.sort()

    var x = document.querySelector('#demo6')
    x.innerHTML = frutas
}

// classificação numérica (em ordem numérica ascendente) - sort ()
var pontos = [40, 100, 1, 5, 4, 25, 10]
function meuSort2() {
    pontos.sort(function(a,b) {
        return a - b
    }) 

    var x = document.querySelector('#demo7')
    x.innerHTML = pontos
}

// Número Sequencing (em ordem numérica decrescente) - sort ()
var pontos = [40, 100, 1, 5, 4, 25, 10]
function meuSort3() {
    pontos.sort(function(a,b) {
        return b - a
    })
    var x = document.querySelector('#demo8')
    x.innerHTML = pontos
}

// Adicionar um elemento para a segunda posição na matriz - splice ()
var frutas = ['Manga', 'Laranja', 'Maça', 'Banana']
function meuSplice() {
    frutas.slice(2, 0, 'Limão', 'Uva')

    var x = document.querySelector('#demo9')
    x.innerHTML = frutas
}

// Converter uma matriz de cadeia para -toString ()
var frutas = ['Banana', 'Laranja', 'Maça', 'Manga'];
function minhaString() {
    var str = frutas.toString()

    var x = document.querySelector('#demo10')
    x.innerHTML = str 
}

// No início da matriz para adicionar novos elementos - unshift ()
var frutas = ['Banana', 'Laranja', 'Maça', 'Manga'];
function minhaUnshift() {
    frutas.unshift('Limão', 'Uva')

    var x = document.querySelector('#demo11')
    x.innerHTML = frutas
}