var area = document.querySelector('#area')

area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
    area.innerHTML = 'OK - Clicou'
    area.style.backgroundColor = 'red'
}

function entrar() {
    area.innerHTML = 'Entrou!'
}

function sair() {
    area.innerHTML = 'Saiu!'
    area.style.backgroundColor = '#048804'
}