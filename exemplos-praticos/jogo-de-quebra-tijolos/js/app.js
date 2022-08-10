const container = document.querySelector('.container')

let comDim = container.getBoundingClientRect()

const fimJogo = document.createElement('div')

fimJogo.textContent = 'Iniciar Jogo'
fimJogo.style.position = 'absolute'
fimJogo.style.color = 'white'
fimJogo.style.lineHeight = '60px'
fimJogo.style.height = '250px'
fimJogo.style.textAlign = 'center'
fimJogo.style.fontSize = '3em'
fimJogo.style.textTransform = 'uppercase'
fimJogo.style.backgroundColor = 'red'
fimJogo.style.width = '100%'

fimJogo.addEventListener('click', iniciarJogo)

container.appendChild(fimJogo)

const bola = document.createElement('div')
bola.style.position = 'absolute'
bola.style.width = '20px'
bola.style.height = '20px'
bola.style.backgroundColor = 'white'
bola.style.borderRadius = '25px'
bola.style.backgroundImage = 'url(../img/ball.png)'
bola.style.backgroundSize = '20px 20px'
bola.style.top = '70%'
bola.style.left = '50%'
bola.style.display = 'none'

container.appendChild(bola)

const raquete = document.createElement('div')
raquete.style.position = 'absolute'
raquete.style.backgroundColor = 'white'
raquete.style.height = '20px'
raquete.style.width = '100px'
raquete.style.borderRadius = '25px'
raquete.style.bottom = '30px'
raquete.style.left = '50%'

container.appendChild(raquete)

document.addEventListener('keydown', function(e) {

    if(e.keyCode === 37) raquete.left = true
    if(e.keyCode === 39) raquete.right = true 
    if(e.keyCode === 38 && !jogador.emJogo) jogador.emJogo = true 
})
document.addEventListener('keyup', function(e) {

    if(e.keyCode === 37) raquete.left = false 
    if(e.keyCode === 39) raquete.right = false  
})

const jogador = {
    fimJogo: true
}
function iniciarJogo() {

    if (jogador.fimJogo) {
        jogador.fimJogo = false 
        fimJogo.style.display = 'none'
        jogador.pontuacao = 0
        jogador.vidas = 1
        jogador.emJogo = false 
        bola.style.display = 'block'
        bola.style.left = raquete.offsetLeft + 50 + 'px'
        bola.style.top = raquete.offsetTop - 30 + 'px'
        
        jogador.ballDir = [2, -5]
        jogador.num = 80

        definirTijolos(jogador.num)
        atualizaPontuacao()
        jogador.ani = window.requestAnimationFrame(atualizar)
    }
}
function atualizar() {

    if (!jogador.fimJogo) {
        
        let pAtual = raquete.offsetLeft

        if (raquete.left && pAtual > 0) {
            pAtual -= 5
        }
        if (raquete.right && (pAtual < (comDim.width - raquete.offsetWidth))) {
            pAtual += 5
        }
        raquete.style.left = pAtual + 'px'

        if (!jogador.emJogo) {
            esperandoRaquete()
        } else {
            moverBola()
        }
        jogador.ani = window.requestAnimationFrame(atualizar)
    }
}
function definirTijolos(num) {

    let linha = {
        x: ((comDim.width % 100) / 2),
        y: 50
    }
    let pular = false 

    for(let x = 0; x < num; x++) {

        if (linha.x > (comDim.width - 100)) {
            
            linha.y += 50

            if (linha.y > (comDim.height / 2)) {
                pular = true 
            }
            linha.x = ((comDim.width % 100) / 2)
        }
        linha.contar = x 

        if (!pular) {
            criarTijolo(linha)
        }
        linha.x += 100
    }
}
function criarTijolo(pos) {

    const div = document.createElement('div')
    div.setAttribute('class', 'tijolo')
    div.style.backgroundColor = rCor()
    div.textContent = pos.contar + 1 
    div.style.left = pos.x + 'px'
    div.style.top = pos.y + 'px'

    container.appendChild(div)
}
function rCor() {

    return '#' + Math.random().toString(16).substr(-6)
}
function moverBola() {

    let posBola = {
        x: bola.offsetLeft,
        y: bola.offsetTop
    }
    if (posBola.y > (comDim.height - 20) || posBola.y < 0) {
        
        if (posBola.y > (comDim.height - 20)) {
            caiuFora()
        } else {
            jogador.ballDir[1] *= -1
        }
    }
    if (posBola.x > (comDim.width - 20) || posBola.x < 0) {
        jogador.ballDir[0] *= -1
    }

    if (ehColisao(raquete, bola)) {
        
        let temp = ((posBola.x - raquete.offsetLeft) - (raquete.offsetWidth / 2)) / 10
        console.log('acertar');
        jogador.ballDir[0] = temp
        jogador.ballDir[1] *= -1
    }

    let tijolos = document.querySelectorAll('.tijolo')

    if (tijolos.length == 0 && !jogador.fimJogo) {
        
        rolha()
        definirTijolos(jogador.num)
    }

    for(let tTijolo of tijolos) {
        if (ehColisao(tTijolo, bola)) {
            jogador.ballDir[1] *= -1
            tTijolo.parentNode.removeChild(tTijolo)
            jogador.pontuacao++
            atualizaPontuacao()
        }
        
    }
    posBola.y += jogador.ballDir[1]
    posBola.x += jogador.ballDir[0]

    bola.style.top = posBola.y  + 'px'
    bola.style.left = posBola.x + 'px'
}
function ehColisao(a, b) {
    let aRect = a.getBoundingClientRect()
    let bRect = b.getBoundingClientRect()

    return !((aRect.right < bRect.left) || (aRect.left > bRect.right) || (aRect.bottom < bRect.top) || (aRect.top > bRect.bottom))
    
}
function atualizaPontuacao() {

    document.querySelector('.pontuacao').textContent = jogador.pontuacao
    document.querySelector('.vidas').textContent = jogador.vidas
}
function caiuFora() {
    jogador.vidas--

    if (jogador.vidas <  0) {
        fimDeJogo()
        jogador.vidas = 0
    }
    atualizaPontuacao()
    rolha()
}
function fimDeJogo() {
    fimJogo.style.display = 'block'
    fimJogo.innerHTML = 'Fim de jogo<br>Sua pontuação ' + jogador.pontuacao
    jogador.fimJogo = true 
    bola.style.display = 'none'

    let tempTijolos = document.querySelectorAll('.tijolo')

    for(let tTijolo of tempTijolos) {

        tTijolo.parentNode.removeChild(tTijolo)
    }
    window.cancelAnimationFrame(jogador.ani)
}
function rolha() {
    jogador.emJogo = false 
    jogador.ballDir[0, -5]
    esperandoRaquete()
    window.cancelAnimationFrame(jogador.ani)
}
function esperandoRaquete() {
    bola.style.top = (raquete.offsetTop - 22) + 'px'
    bola.style.left = (raquete.offsetLeft + 40) + 'px'
}