const buracos = document.querySelectorAll('.buraco')
const pontuacaoPainel = document.querySelector('.pontuacao')
const topeiras = document.querySelectorAll('.topeira')
let ultimoBuraco
let subir = false 
let pontuacao = 0

function iniciarJogo() {

    console.log("Iniciando...");

    pontuacaoPainel.textContent = 0
    subir = false 
    pontuacao = 0
    espiar()

    setTimeout(() => subir = true, 15000)
}

function espiar() {

    const tempo = aleatorioTempo(500, 1000)
    const buraco = aleatorioBuraco(buracos)

    buraco.classList.add('cima')

    setTimeout(() => {
        buraco.classList.remove('cima')

        if (!subir) {
            espiar()
        }
    }, tempo);
}
function aleatorioTempo(min, max) {

    return Math.floor(Math.random() * (max -min) + min)
}
function aleatorioBuraco(buracos) {

    const indice = Math.floor(Math.random() * buracos.length)
    const buraco = buracos[indice]

    // evitar que o mesmo buraco obtenha o mesmo número
    if (buraco === ultimoBuraco) {
        
        return aleatorioBuraco(buracos)
    }
    ultimoBuraco = buraco

    return buraco
}
function bater(e) {

    if(!e.isTrusted) return;

    pontuacao++

    this.parentNode.classList.remove('cima')
    pontuacaoPainel.textContent = pontuacao
}
topeiras.forEach(topeira => topeira.addEventListener('click', bater))