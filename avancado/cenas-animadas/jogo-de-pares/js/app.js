var meuCartao = document.getElementById('container')
var resultadosArray = []
var contar = 0
var texto = document.getElementById('texto')
var segundos = 00
var dezenas = 00
var anexarDezenas = document.getElementById('dezenas')
var anexarSegundos = document.getElementById('segundos')
var intervalo 
var imagens = [
    'sass',
    'git',
    'gulp',
    'css',
    'grunt'
]
var clone = imagens.slice(0)
var cartoes = imagens.concat(clone)

function embaralhar(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);

    return o
}
embaralhar(cartoes)

for(var index = 0; index < cartoes.length; index++) {
    // cria o elemento div
    cartao = document.createElement('div')
    // adiciona elemento ao item
    cartao.dataset.item = cartoes[index]
    // adiciona elemento a view cartao
    cartao.dataset.view = "cartao"
    meuCartao.appendChild(cartao)

    cartao.onclick = function() {
        // se className diferente de flipped e className diferente de correto
        if (this.className != 'invertido' && this.className != 'correto') {
            // seta className como invertido
            this.className = 'invertido'
            // variavel resultado recebe item dataset
            var resultado = this.dataset.item
            // array resultadoArray adiciona no final do elemento resultado
            resultadosArray.push(resultado)
            // limpa o intervalo
            clearInterval(intervalo)
            // intervalo inicializa o tempo em 10
            intervalo = setInterval(iniciarTempo, 10)
        }
           // se o array é maior que 1
           if (resultadosArray.length > 1) {
            //se array e 0 e igual a 1
            if (resultadosArray[0] === resultadosArray[1]) {
                // chama verifica 
                verifique('correto')
                // incrementa contar
                contar++
                // chama vencedor
                vencedor()
                // array resultadoArray recebe array vazio
                resultadosArray = []
            } else {
                verifique('revertido')
                resultadosArray = []
            }
        }
    }
}
var verifique = function(className) {
    var x = document.getElementsByClassName('invertido')
    setTimeout(function() {
        for(var index = (x.length - 1); index >= 0; index--) {
            x[index].className = className
        }
    }, 500)
}
var vencedor = function() {
    if (contar === 5) {
        clearInterval(intervalo)
        texto.innerHTML = "Seu tempo foi " + segundos + ":" + dezenas
    }
}
function iniciarTempo() {
    dezenas++
    
    // alterando elemento para 0
    if (dezenas < 9) {
        anexarDezenas.innerHTML = "0" + dezenas
    }

    // se as dezenas forem maiores que 0
    if (dezenas > 9) {
        // alterando elemento para dezenas
        anexarDezenas.innerHTML = dezenas 
    }

    // se as dezenas forem maiores que 99
    if (dezenas > 99) {
        // incrementa segundos
        segundos++
        // altera o elemento para 0 concatena segundos
        anexarSegundos.innerHTML = "0" + segundos
        // dezenas recebe 0
        dezenas = 0
        // altera o elemento recebe segundos
        anexarDezenas.innerHTML = "0" + 0
    }
    //
    if (segundos > 9) {
        anexarSegundos.innerHTML = segundos
    }
}