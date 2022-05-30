let cores = ['yellow', 'red', 'blue', 'violet', 'green', 'black', 'red', 'blue', 'violet', 'green', 'orange']
// ['amarelo', 'vermelho', 'azul', 'violeta', 'verde', 'preto', 'vermelho', 'azul', 'verde', 'laranja']

let logos = ['imagens/logos/Logo_argo_white.png', 'imagens/logos/Logo_auntie-annes_white.png', 'imagens/logos/Logo_brookstone_white.png', 'imagens/logos/Logo_bsmooth_white.png', 'imagens/logos/Logo_burrito-beach_white.png', 'imagens/logos/Logo_chicago-sports_white.png', 'imagens/logos/Logo_cnn_white.png', 'imagens/logos/Logo_coach_white.png', 'imagens/logos/Logo_dunkin-donuts_white.png', 'imagens/logos/Logo_dunkin-donuts_white.png', 'imagens/logos/Logo_dunkin-donuts_white.png', 'imagens/logos/Logo_dunkin-donuts_white.png', 'imagens/logos/Logo_duty-free-store_white.png', 'imagens/logos/Logo_field_white.png', 'imagens/logos/Logo_hudson_white.png', 'imagens/logos/Logo_mac-cosmetics_white.png', 'imagens/logos/Logo_nuts-on-clark_white.png', 'imagens/logos/Logo_rocky-mountain-chocolate_white.png', 'imagens/logos/Logo_sarahs-candies_white.png', 'imagens/logos/Logo_shoe-hospital_white.png', 'imagens/logos/Logo_spirit-of-the-white-horse_white.png', 'imagens/logos/Logo_talie_white.png'];

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let body = document.body 

let pontuacao = document.querySelectorAll('.score')
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

    aleatorio = Math.floor(Math.random() * (windowWidth - 100))
    div.style.left = aleatorio + 'px'
    div.dataset.number = atualBalao
    atualBalao++
    balaoContar++

    switch (balaoContar) {
        case 10:
			balaoVelocidade += .5
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

function criarPlano() {
	if(!planoExiste) {
		// cria div container objeto do planoExiste
		let div = document.createElement('div')
		div.className = 'plano'
		div.style.top = BuscarNumeroAleatorio(0, 250) + 'px'
		div.style.left = '1200px'
		div.style.width = 'fit-content'
		div.style.height ='fit-content'
		div.style.position = 'absolute'
		planoExiste = true

		// criar plano de imagem e definir estilo
		let plano = document.createElement('img')
		plano.src = 'imagens/plane-pulling-banner.png'
		plano.style.float = 'right'
		plano.style.height = '175px'
		plano.style.left = '-1200px'
		plano.style.position = 'absolute'

		// criar logo imagem e definir estilo
		let logo = document.createElement('img')
		selecionarLogo = logos[BuscarNumeroAleatorio(0, (logos.length - 1))]
		logo.src = selecionarLogo
		logo.style.position = 'absolute'
		logo.style.left = '-1133px'
		logo.style.top = '8px'
		logo.style.width = '165px'
		logo.style.height = 'auto'

			//Insert images into container div	
		div.appendChild(plano);
		div.appendChild(logo);
		//insert div into body
		body.appendChild(div);
		animarPlano(div)
	}
}
function animarPlano(elem) {
	let posicao = -400
	let intervalo = setInterval(frame, 10)
	let taxaVelocidade = 2

	function frame() {
		if(posicao >= (windowWidth + 1200) && !fimJogo) {
			clearInterval(intervalo)
			planoExiste = false
			criarPlano()
		} else if(fimJogo) {
			clearInterval(intervalo)
			planoExiste = false
		} else {
			posicao += taxaVelocidade
			elem.style.left = posicao + 'px'
		}
	}
}
function BuscarNumeroAleatorio(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)

	return Math.floor(Math.random() * (max - min + 1 )) + min
}
function deletarBalao(elem) {
	elem.remove()
	num++

	switch(elem.className) {
		case "balloon balloon-violet":
		pontos +=1;
		break;
		case "balloon balloon-orange":
		pontos +=1;
		break;
		case "balloon balloon-green":
		pontos +=1;
		break;
		case "balloon balloon-red":
		pontos +=1;
		break;
		case "balloon balloon-yellow":
		pontos +=1;
		break;
		case "balloon balloon-blue":
		pontos +=1;
		break;
		case "balloon balloon-black":
		if (pontos > 5) {
			pontos -= 5;
		} else {
			pontos = 0;
		}
		break;
	}
	atualizarPontuacao()
}
function deletarPlano(elem) {
	elem.remove()
}
function atualizarPontuacao() {
	for(let index = 0; index < pontuacao.length; index++) {
		pontuacao[index].textContent = num
	}
	for(index = 0; index < totalPontos.length; index++) {
		totalPontos[index].textContent = pontos
	}
}

function atualizarEstrelas() {
	if (pontos < 70) {
		estrelas = 'imagens/1-star.png'
	} else if (pontos <= 80) {
		estrelas = 'imagens/2-star.png'
	} else if (pontos <= 90) {
		estrelas = 'imagens/3-star.png'
	} else if (pontos <= 100) {
		estrelas = 'imagens/4-star.png'
	} else {
		estrelas = 'imagens/5-star.png'
	}
	var image = document.createElement('img')
	image.src = estrelas
	image.style.height = '100px'
	image.id = 'estrela'
	document.getElementById('win-starsEarned').appendChild(image)
	document.getElementById("lose-starsEarned").appendChild(image)
}
function removerEstrelas() {
	var removerVencedorEstrelas = document.getElementById('star')
	var removerPerdeuEstrelas = document.getElementById('star')

	removerVencedorEstrelas.remove()
	removerPerdeuEstrelas.remove()
}
function iniciarJogo() {
	reiniciarJogo()
	document.querySelector('.score-block').style.display = 'block'
    criarPlano()
	let timeout = 0
	let loop = setInterval(function() {
		timeout = Math.floor(Math.random() * 600 - 100)
		if (!fimJogo && num !== total) {
            criarBalao()
        } else if(num !== total) {
			clearInterval(loop)
			totalShadow.style.display = 'flex'
			document.querySelector('.score-block').style.display = 'none'
			totalShadow.querySelector('.lose').style.display = 'block'
			atualizarEstrelas()
		} else {
			clearInterval(loop)
			totalShadow.style.display = 'flex'
			document.querySelector('.score-block').style.display = 'none'
			totalShadow.querySelector('.win').style.display = 'block'
			atualizarEstrelas()
		}
	}, 800 + timeout)
}
function reiniciarJogo() {
	let paraRemover = document.querySelectorAll('.balloon')
	for(let i = 0; i < paraRemover.length; i++) {
		paraRemover[i].remove()
	}
	let paraRemoverPlanos = document.querySelectorAll('.plano')
	for(let i = 0; i < paraRemoverPlanos.length; i++) {
		paraRemoverPlanos[i].remove()
	}
	fimJogo = false
	num = 0
	pontos = 0
	balaoVelocidade = 1
	balaoContar = 0
	atualizarPontuacao()
}
window.addEventListener('resize', function(event) {
	windowWidth = window.innerWidth
	windowHeight = window.innerHeight
})
document.addEventListener('click', function(event) {
	if (event.target.classList.contains('balloon')) {
		deletarBalao(event.target)
	}
})
document.querySelector('.restart').addEventListener('click', function() {
	totalShadow.style.display = 'none'
	totalShadow.querySelector('.win').style.display = 'none'
	totalShadow.querySelector('.lose').style.display = 'none'
	removerEstrelas()
	iniciarJogo()
})
document.querySelector('#win-back').addEventListener('click', function() {
	window.location.href = 'http://www.flywithbutchohare.com'
})
document.querySelector('#lost-back').addEventListener('click', function() {
	window.location.href = 'http://www.flywithbutchohare.com'
})
document.querySelector('#win-start').addEventListener('click', function() {
	totalShadow.style.display = 'none'
	totalShadow.querySelector('.win').style.display = 'none'
	totalShadow.querySelector('.lose').style.display = 'none'
	removerEstrelas()
	iniciarJogo()
})
document.querySelector('#lost-start').addEventListener('click', function() {
	totalShadow.style.display = 'none'
	totalShadow.querySelector('.win').style.display = 'none'
	totalShadow.querySelector('.lose').style.display = 'none'
	removerEstrelas()
	iniciarJogo()
})
iniciarBtn.addEventListener('click', function() {
    iniciarJogo()
    document.querySelector('.start-game-window').style.display = 'none'
    document.querySelector('.score-block').style.display = 'block'
    console.log("iniciar jogo");
})
voltarBtn.addEventListener('click', function() {
	window.location.href = 'http://www.flywithbutchohare.com';
});
// Função de tempo limite para retornar ao Game Center após período de inatividade.
// (() => {
// 	var t 
// 	window.onmousemove = redefinirTempo; // captura os movimentos do mouse
//     window.onmousedown = redefinirTempo; // captura os movimentos do mouse
//     window.onclick = redefinirTempo;     // capta cliques do mouse
//     window.onscroll = redefinirTempo;    // pega rolando
//     window.onkeypress = redefinirTempo;  //captura as ações do teclado

// 	function recarregar() {
// 		window.location.href = 'http://www.flywithbutchohare.com';  
// 	}
// 	function redefinirTempo() {
// 		clearInterval(t)
// 		t = setTimeout(recarregar, 120000)
// 	}
// })()