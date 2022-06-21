window.addEventListener('DOMContentLoaded', carregar)

function carregar() {
    var porcentagem = [0.25, 0.5, 0.75, 1]

    quantidade = 0,
    caminhaLoopDur = 10,

    encher = function() {
        let encherEl = document.querySelector('.progress-fill')

        encherEl.style.transform = 'scaleY(' + porcentagem[quantidade] + ')'
        ++quantidade

        if (quantidade < porcentagem.length) {
            setTimeout(encher, (caminhaLoopDur * 1e3) / 2)
        }
    }
    setTimeout(encher, (caminhaLoopDur * 1e3) / 4)
}