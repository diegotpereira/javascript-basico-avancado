const meuCabecalho = document.querySelector('h1')
// meuCabecalho.textContent = 'Ola mundo!'
let minhaImagem = document.querySelector('img')
let meuBotao = document.querySelector('button');


let sorvete = 'chocolate'

if (sorvete === 'chocolate') {
    alert('Opa, eu amo sorvete de chocolate!')
} else {
    alert('Ahh, mas chocolate é meu favorito...')
}
let minhaVariavel = document.querySelector('h1')

alert('ola')

function multiplica(num1, num2) {
    let resultado = num1 * num2

    return resultado
}
multiplica(4, 7)
multiplica(20, 20)
multiplica(0.5, 3)

document.querySelector('html').onclick = function() {
    alert('E aí, olá!')
}


minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src')

    if (meuSrc === 'imagens/firefox-icon.png') {
        minhaImagem.setAttribute('src', 'imagens/firefox2.png')
    } else {
        minhaImagem.setAttribute('src', 'imagens/firefox-icon.png')
    }
}


function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite sua nome.')
    if (!meuNome) {
        defineNomeUsuario()
    } else {
        localStorage.setItem('nome', meuNome)
        meuCabecalho.textContent - 'Javascript é legal, ' + meuNome
    }
}
if (!localStorage.getItem('nome')) {
    defineNomeUsuario() 
} else {
    let localStorageNome = localStorage.getItem('nome')
    meuCabecalho.innerHTML = 'Javascript' + localStorageNome
}
meuBotao.onclick = function() {
    defineNomeUsuario()
}