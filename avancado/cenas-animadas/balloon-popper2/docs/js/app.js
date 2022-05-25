let cores = ['yellow', 'red', 'blue', 'violet', 'green', 'black', 'red', 'blue', 'violet', 'green', 'orange']
// ['amarelo', 'vermelho', 'azul', 'violeta', 'verde', 'preto', 'vermelho', 'azul', 'verde', 'laranja']

let logos = ['imagens/logos/Logo_argo_white.png', 'imagens/logos/Logo_auntie-annes_white.png', 'imagens/logos/Logo_brookstone_white.png', 'imagens/logos/Logo_bsmooth_white.png', 'imagens/logos/Logo_burrito-beach_white.png', 'imagens/logos/Logo_chicago-sports_white.png', 'imagens/logos/Logo_cnn_white.png', 'imagens/logos/Logo_coach_white.png', 'imagens/logos/Logo_dunkin-donuts_white.png', 'imagens/logos/Logo_dunkin-donuts_white.png', 'imagens/logos/Logo_dunkin-donuts_white.png', 'imagens/logos/Logo_dunkin-donuts_white.png', 'imagens/logos/Logo_duty-free-store_white.png', 'imagens/logos/Logo_field_white.png', 'imagens/logos/Logo_hudson_white.png', 'imagens/logos/Logo_mac-cosmetics_white.png', 'imagens/logos/Logo_nuts-on-clark_white.png', 'imagens/logos/Logo_rocky-mountain-chocolate_white.png', 'imagens/logos/Logo_sarahs-candies_white.png', 'imagens/logos/Logo_shoe-hospital_white.png', 'imagens/logos/Logo_spirit-of-the-white-horse_white.png', 'imagens/logos/Logo_talie_white.png'];

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let body = document.body 

let pontuacao = document.querySelector('.score')
let totalPontos = document.querySelectorAll('.points')
let num = 0
let total = 100
let atualBalao = 0
let atualPlano = 0
let planoExiste = false
let fimJogo = false 

let totalShadow = document.querySelector('.total-shadow')
let iniciarBtn = document.querySelector('.start-game-button')
let voltarBtn = document.querySelector('.back-game-button')
let backButton = document.querySelector('#btnVoltar')
let pontos = 0
let balaoVelocidade = 1
let balaoContar = 0
let estrelas = 'imagens/1-star.png'

function criarBalao() {
    let div = document.createElement('div')
    let aleatorio = Math.floor(Math.random() * cores.length)
    div.className = 'balloon balloon-' + cores[aleatorio]

    aleatorio = Math.floor(Math.random() + (windowWidth - 100))
    div.style.left = aleatorio + 'px'
    div.dataset.number = atualBalao
    atualBalao++
    balaoContar++

    switch (balaoContar) {
        case 10:
            break;
        case 20:
			balaoVelocidade += .5;
			break;
		case 30:
			balaoVelocidade += .25;
			break;
		case 40:
			balaoVelocidade += .25;
			break;
		case 50:
			balaoVelocidade += .25;
			break;
		case 60:
			balaoVelocidade += .25;
			break;
		case 70:
			balaoVelocidade += .1;
			break;
		case 80:
			balaoVelocidade += .1;
			break;
		case 90:
			balaoVelocidade += .1;
			break;
    }
    body.appendChild(div)
    animarBalao(div, balaoVelocidade)
}
function animarBalao(elem, velocidade) {
    let pos = 0;
    let aleatorio = Math.floor(Math.random() * 6 - 3)
    let intervalo = setInterval(frame, 12 - Math.floor(num / 10) + aleatorio)

    x = elem.className

    function frame() {
        if (pos >= (windowHeight + 200) && (document.querySelector('[data-number="' + elem.dataset.number + '"]')) !== null) {
            clearInterval(intervalo)

            if (elem.className !== 'balloon balloon-black') {
                fimJogo = true
            }
        } else {
            pos += velocidade
            elem.style.top = windowHeight - pos + 'px'
        }
    }
}
function iniciarJogo() {
        if (!fimJogo && num !== total) {
            criarBalao()
        }
}

iniciarBtn.addEventListener('click', function() {
    iniciarJogo()
    document.querySelector('.start-game-window').style.display = 'none'
    document.querySelector('.score-block').style.display = 'block'
    console.log("iniciar jogo");
})