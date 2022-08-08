// Elementos
const iniciar_sfx = new Audio('./mp3/start.mp3')
const espiar_sfx = new Audio('./mp3/peep.mp3')
const ding_sfx  = new Audio('./mp3/ding.mp3')
const hit_sfx = new Audio('./mp3/hit.mp3');
const hit2_sfx = new Audio('./mp3/hit2.mp3');
const peep_sfx = new Audio('./mp3/peep.mp3')

const cronometro = document.querySelector('.tempo span')
const velocidadeNivelDOM = document.querySelector('.velocidade-nivel')
const tempoNivelDOM = document.querySelector('.tempo-nivel')



const buracos = document.querySelectorAll('.buraco')

const contadora = document.querySelector('.pontuacao span')
const placar = document.querySelector('.placar')
const nomeContainer = document.querySelector('.entreNome')
const nomeEntrada =  document.querySelector('input[type=text]')
const tabela = document.querySelector('.pontuacoes')
let placarTabela
let classificacaoTabela
if (localStorage.getItem('placar')) {
    placarTabela = JSON.parse(localStorage.getItem('placar'))
} else {
    placarTabela = []
}
let pontuacaoFinal

const iniciar = document.querySelector('.iniciar')
const novamente = document.querySelector('.novamente')

let volume_nivel = 1
let velocidade_nivel = 1
let tempo_nivel = 1

let contar = 0
let ultimoBuraco
let tempoAcima
let iniciado = false

// Modal
const modal = document.querySelector('.modal')

modal.addEventListener('click', e => {
    e.preventDefault()

    const selecionar = e.target.className;

    switch(selecionar) {

        case 'e':
            alterarNivelVelocidade(null, 3)
            alterarNivelTempo(null, '5')
        break;

        case 'm':
            alterarNivelVelocidade(null, 2)
            alterarNivelTempo(null, '30')
        break;

        case 'd':
            alterarNivelVelocidade(null, 2)
            alterarNivelTempo(null, '10')
        break;

        default:
            return
        
    }
    modal.classList.add('hide')
    iniciar_sfx.currentTime = 0
    iniciar_sfx.play()
})

// Ouvintes de eventos (Listeners)
iniciar.addEventListener('click', iniciarTempo)
novamente.addEventListener('click', irMenu)

buracos.forEach(buraco => buraco.addEventListener('mousedown', subir))
buracos.forEach(buraco => buraco.addEventListener('touchstart', subir))

nomeEntrada.addEventListener('keyup', entreNome)

velocidadeNivelDOM.addEventListener('click', alterarNivelVelocidade)
tempoNivelDOM.addEventListener('click', alterarNivelTempo)


// Funções 
function subir(e) {
    e.preventDefault()

    if (this.classList.contains('subir')) {
        this.classList.remove('subir')

        if (volume_nivel) {
            
            const x = Math.round(Math.random() * ( 2 - 1 ) + 1)

            if (x === 1) {
                hit_sfx.currentTime = 0
                hit_sfx.play()
 
            } else {

                hit2_sfx.currentTime = 0.1
                hit2_sfx.play()
            }
        }
        contar++
        contadora.textContent = `${contar}`
    }
}

function espiar() {

    const aleatorioTempo = getAleatorioTempo()
    const buraco = aleatorioBuraco(buracos)

    // Acessando a classe
    buraco.classList.add('subir')

    if (volume_nivel) {
        peep_sfx.currentTime = 0
        peep_sfx.play()
    }
    setTimeout(() => {
        if (!tempoAcima) espiar()
        buraco.classList.remove('subir')
    }, aleatorioTempo)
}

function getAleatorioTempo() {

    switch(velocidade_nivel) {
        case 0: 
           return Math.round(Math.random() * (1500 - 600) + 600)

        case 1: 
           return Math.round(Math.random() * (1500 - 400) + 400)

        case 2: 
           return Math.round(Math.random() * (450 - 450) + 450)

        default:
            return Math.round(Math.random() * (1500 - 400) + 400)
    }
}
function aleatorioBuraco(buracos) {

    const index = Math.floor(Math.random() * buracos.length)
    const buraco = buracos[index]

    if (ultimoBuraco === buraco) {
        
        return aleatorioBuraco(buracos)
    }
    ultimoBuraco = buraco

    return buraco
}
function iniciarTempo() {

    if (iniciado === false) {
        
        if (volume_nivel) {
            
            iniciar_sfx.currentTime = 0.125
            iniciar_sfx.play()
        }
        contadora.textContent = '0'
        contar = 0
        tempoAcima = false
        tempo = 0
        iniciado = true 
        cronometro.textContent = `${getTempo()}`
        espiar()

        contagemRegressiva = setInterval(() => {
            tempo++

            cronometro.textContent = `${getTempo() - tempo}`;
            (getTempo() - tempo === 3 || getTempo() - tempo === 1) ? cronometro.style.color = '#f33' : cronometro.style.color = 'inherit'

            if (tempo >= getTempo()) {
                
                clearInterval(contagemRegressiva)

                tempoAcima = true 
                iniciado = false

                if (volume_nivel) {
                    
                    ding_sfx.currentTime = 0
                    ding_sfx.play()
                }
                setTimeout(() => {
                    placarAtualizador()
                }, 1000)
            }
        }, 1000)

    }
}
function placarAtualizador() {
    pontuacaoFinal = contar

    nomeContainer.classList.add('flex')
    setTimeout(() => {
        nomeContainer.classList.add('opacity')
    }, 100);
}
function entreNome(e) {

    if (e.keyCode === 13) {
        nome = this.value 
        this.value = ''

        nomeContainer.classList.remove('flex')
        nomeContainer.classList.remove('opacity')
        placar.classList.add('block')
        placar.classList.add('opacity')
        
        placarTabela.push({ nome, pontuacao: pontuacaoFinal })
        localStorage.setItem('placar', JSON.stringify(placarTabela))

        classificacaoTabela = placarTabela.sort((a, b) => (a.pontuacao > b.pontuacao ? -1 : 1))

        tabela.innerHTML = `
        <button class="pontuacao-botao">X</button>
        <thead>
           <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Pontuação</th>
           </tr>
        </thead>`;

        for(let i = 0; i < classificacaoTabela.length; i++) {

            if(i > 7) break;

            tabela.innerHTML += `
            <tr>
               <td>${i + 1}</td>
               <td>${classificacaoTabela[i].nome}</td>
               <td>${classificacaoTabela[i].pontuacao}</td>
            </tr>`
        }
        tabela.querySelector('.pontuacao-botao').addEventListener('click', irMenu)
    }
}
function irMenu() {
    placar.classList.remove('block')
    placar.classList.remove('opacity')
    nomeContainer.classList.remove('flex')
    nomeContainer.classList.remove('opacity')
}
function getTempo() {
    switch(tempo_nivel) {

        case 0:
            return 30
    
        case 1:
            return 10

        case 2:
            return 5
        
        default:
            return 10
    }
}
function alterarNivelVelocidade(e, n) {

    const elemento = velocidadeNivelDOM.children[1]
    const atualNivel = n || +elemento.textContent

    if (volume_nivel) {
        iniciar_sfx.currentTime = 0.125
        iniciar_sfx.play()

        switch(atualNivel) {
            case 1:
                elemento.classList.remove('facil')
                elemento.classList.add('normal')
                elemento.textContent = '2'
                velocidade_nivel = 1
                break

            case 2: 
                elemento.classList.remove('normal')
                elemento.classList.add('facil')
                elemento.textContent = '3'
                velocidade_nivel = 2
                break 

            case 3:
                elemento.remove('dificil')
                elemento.classList.add('facil')
                elemento.textContent = '1'
                velocidade_nivel = 0
                break

                default:
                elemento.textContent = '2'
                velocidade_nivel = 1
                break
        }
    }
}

function alterarNivelTempo(e, n) {

    const elemento = tempoNivelDOM.children[1]
    const atualNivel = n || elemento.textContent

    if (volume_nivel) {
        
        iniciar_sfx.currentTime = 0.125
        iniciar_sfx.play()
    }

    switch(atualNivel) {

        case '30':
            elemento.classList.remove('facil')
            elemento.classList.add('normal')
            elemento.textContent = '10'
            tempo_nivel = 1
            break 
        
        case '10':
            elemento.classList.remove('normal')
            elemento.classList.add('facil')
            elemento.textContent = '5'
            tempo_nivel = 2
            break 

        case '5':
            elemento.classList.remove('facil')
            elemento.classList.add('facil')
            elemento.textContent = '30'
            tempo_nivel = 2
            break 

        default:
            elemento.textContent = '10'
            tempo_nivel = 1 
            break
    }
}