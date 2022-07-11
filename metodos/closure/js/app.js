let nome = 'Diego'

function saudacoes() {
    let mensagem = 'Olá'

    function dizerOla() {
        console.log(mensagem);
    }

    console.log(mensagem + ' ' + nome);
}
saudacoes()

function saudacoes(mensagem) {
    return function(nome) {
        return mensagem + ' ' + nome
    }
}
let dizOla = saudacoes('Olá')
let dizAlo = saudacoes('Aló')

console.log(dizOla('Diego'));
console.log(dizAlo('Diego'));

for( var index = 1; index <= 3; index++) {
    setTimeout(() => {
        console.log('depois ' + index + ' segundo(s):' + index);
    }, index * 1000);
}

// Usando a solução IIFE
for (var index = 1; index <= 3; index++) {
    (function(index) {
        setTimeout(() => {
            console.log('depois ' + index + ' segundo(s):' + index);
        }, index * 1000);
    })(index)
}

// Usando a palavra-chave let no ES6
for (let index = 1; index <= 3; index++) {
    setTimeout(() => {
        console.log('depois ' + index + ' segundo(s):' + index);
    }, index * 1000)
}