var alterarBg = function(event) {
    console.log("metodo chamado");
    var flash = event.target, flashes = document.getElementById('flash')
    flashes.style.backgroundColor = 'white'
    flashes.setAttribute('disabled', 'disabled')

    var flashPara = event.target, btns = document.getElementById('btns')
    btns.style.margin = '-130px -175px'
    btns.style.padding = '2px 20px 5px'

    setTimeout(function() {
        limparDemo(flash)
    }, 2000)
}

function limparDemo(button) {
    var flashes = document.getElementById('flash')
    flashes.style.backgroundColor = 'yellow'

    var botoes = document.getElementById('btns')
    botoes.style.margin = '-140px -175px'
    botoes.style.padding = '4px 20px 10px'
    button.removeAttribute('disabled')
}

var botao = document.querySelector('button')
botao.addEventListener('click', alterarBg)
console.log(botao);