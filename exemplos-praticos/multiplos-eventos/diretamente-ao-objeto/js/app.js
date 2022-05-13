var area = document.querySelector('#area')

area.onclick = function() {
    clicar()
}
area.onmouseenter = function() {
    entrar()
}
area.onmouseout = function() {
    sair()
}

function clicar() {
    area.innerHTML = 'OK - CLICOU'
    area.style.backgroundColor = 'red'
}

function entrar() {
    area.innerText = "Entrou!";
}

function sair() {
    area.innerText = `Saiu!!!`;
    area.style.backgroundColor = '#048804';
}