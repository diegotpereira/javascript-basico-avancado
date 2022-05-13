var area = document.getElementById('area')

function clicar() {
    area.innerHTML = 'OK - Clicou'
    area.style.background = 'red'
}

function entrar() {
    area.innerText = 'Entrou!'
}

function sair() {
    area.innerText = `Saiu!!!`
    area.style.backgroundColor = '#048804'
}