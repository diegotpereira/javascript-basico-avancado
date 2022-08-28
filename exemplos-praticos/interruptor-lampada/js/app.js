const btnLigaDesliga = document.getElementById('btnLigaDesliga')
const lampada = document.getElementById('lamp')

function ehLampQuebrada() {

    return lampada.src.indexOf('quebrada') > -1
}

function lampadaLigada() {

    if (!ehLampQuebrada()) {
        
        lampada.src = './img/ligada.jpg'
    }
}

function lampadaDesligada() {

    if (!ehLampQuebrada()) {

        lampada.src = './img/desligada.jpg'
        btnLigaDesliga.textContent = 'Ligar'
    }
}

function ligaDesliga() {

    if (btnLigaDesliga.textContent == 'Ligar') {
        
        lampadaLigada()
        btnLigaDesliga.textContent = 'Desligar'

    } else {
        lampadaDesligada()
        btnLigaDesliga.textContent = 'Ligar'
    }
}

btnLigaDesliga.addEventListener('click', ligaDesliga)

lampada.addEventListener('mouseover', lampadaLigada)
lampada.addEventListener('mouseleave', lampadaDesligada)
