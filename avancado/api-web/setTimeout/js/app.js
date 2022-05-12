setTimeout(() => {
    console.log('Atrasado por 2 segundo');
}, 2000)

// exemplo
const meuArray = ['zero', 'um', 'dois']
meuArray.meuMethodo = function(sPropriedade) {
    console.log(arguments.length > 0 ? this[sPropriedade] : this);
}

meuArray.meuMethodo()
meuArray.meuMethodo(1)

// 
setTimeout(meuArray.meuMethodo, 1.0 * 1000)
setTimeout(meuArray.meuMethodo, 1.5 * 1000, '1')

setTimeout(function() {
    meuArray.meuMethodo()
}, 2.0 * 1000)

setTimeout(function() {
    meuArray.meuMethodo('1')
}, 2.5 * 1000)

// usando BIND()
const meuArrayBind = ['zero', 'one', 'dois']
const meuMetodoVinculado = (function(sPropriedade) {
    console.log(arguments.length > 0 ? this[sPropriedade] : this);
}).bind(meuArrayBind)

meuMetodoVinculado()
meuMetodoVinculado(1)

setTimeout(meuMetodoVinculado, 1.0 * 1000)
setTimeout(meuMetodoVinculado, 1.5 * 1000, "1")

// Passando string literais
setTimeout(function() {
    console.log("Olá Mundo");
}, 500)