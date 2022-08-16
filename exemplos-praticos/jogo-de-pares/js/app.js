let par1 = 'https://lauratoddcodes.github.io/Pairs-Game/images/book.svg'
let par2 = 'https://lauratoddcodes.github.io/Pairs-Game/images/globe.svg'
let par3 = 'https://lauratoddcodes.github.io/Pairs-Game/images/mortarboard.svg'
let par4 = 'https://lauratoddcodes.github.io/Pairs-Game/images/pen.svg'
let par5 = 'https://lauratoddcodes.github.io/Pairs-Game/images/pencil.svg'
let par6 = 'https://lauratoddcodes.github.io/Pairs-Game/images/physics.svg'
let par7 = 'https://lauratoddcodes.github.io/Pairs-Game/images/schoolBag.svg'
let par8 = 'https://lauratoddcodes.github.io/Pairs-Game/images/schoolBell.svg'
let par9 = 'https://lauratoddcodes.github.io/Pairs-Game/images/scissors.svg'
let par10 = 'https://lauratoddcodes.github.io/Pairs-Game/images/testTubes.svg'

let arr = [par1, par1, par2, par2, par3, par3, par4, par4, par5, par5, par6, par6, par7, par7, par8, par8, par9, par9, par10, par10]

function atribuirCartoes() {

    document.getElementById('img1').src = arr[0]
    document.getElementById('img2').src = arr[1]
    document.getElementById('img3').src = arr[2]
    document.getElementById('img4').src = arr[3]
    document.getElementById('img5').src = arr[4]
    document.getElementById('img6').src = arr[5]
    document.getElementById('img7').src = arr[6]
    document.getElementById('img8').src = arr[7]
    document.getElementById('img9').src = arr[8]
    document.getElementById('img10').src = arr[9]
    document.getElementById('img11').src = arr[10]
    document.getElementById('img12').src = arr[11]
    document.getElementById('img13').src = arr[12]
    document.getElementById('img14').src = arr[13]
    document.getElementById('img15').src = arr[14]
    document.getElementById('img16').src = arr[15]
    document.getElementById('img17').src = arr[16]
    document.getElementById('img18').src = arr[17]
    document.getElementById('img19').src = arr[18]
    document.getElementById('img20').src = arr[19]
}

atribuirCartoes()

let temporizador = null
let tempo = 0

const temporizadorElemento = document.getElementById('temporizador')

// declarar iniciar a função temporizador
function iniciarTemporizador() {

    temporizadorElemento.innerHTML = tempo 
    tempo += 1
}

// se o cronômetro não for iniciado, inicie o cronômetro
[...document.querySelectorAll('.voltar, .frente')].forEach(item =>
    item.addEventListener('click', function() {

        if (temporizador == null) {
            temporizador = setInterval(iniciarTemporizador, 1000)
        }
    })
);

[...document.querySelectorAll('.voltar', '.frente')].forEach(item  => 
    item.addEventListener('click', function() {

        let encontradosTodosPares = document.querySelectorAll('.parCombinado').length

        // se o jogador encontrou todos menos o último par
        // parCombinado deve ser 18
        if (tempo > 0 && encontradosTodosPares == 18) {
            // a próxima carta que eles virarem terá a classe jogoCompleto adicionada a ela
            this.classList.add('jogoCompleto')

            let jogoCompleto = document.querySelectorAll('.jogoCompleto').length;

            [...document.querySelectorAll('.voltar, .frente')].forEach(item => 
                item.addEventListener('click', function() {
                    // a próxima carta que eles virarem irá parar o cronômetro
                    if (jogoCompleto == 1) {
                        clearInterval(temporizador)

                        // maxima pontuação
                        let atualTempo = temporizadorElemento.innerHTML
                        let atualTempoInt = parseInt(atualTempo)

                        console.log(`A hora atual é ${atualTempoInt}`);

                        let melhorTempo = document.getElementById('melhorTempo').innerHTML;
                        let melhorTempoInt = parseInt(melhorTempo)

                        console.log(`A melhor hora é ${melhorTempoInt}`);

                        document.getElementById('paresResultado').innerHTML = `Seu tempo foi ${atualTempoInt} segundos`

                        if (atualTempoInt < melhorTempoInt || melhorTempoInt == 0) {
                            document.getElementById('melhorTempo').innerHTML = atualTempo
                        }
                        
                        if (atualTempoInt < melhorTempoInt && melhorTempoInt != 0) {
                            
                            const maximaPontuacao = document.getElementById('maximaPontuacao')
                            maximaPontuacao.innerHTML = '<span>Você bateu o seu <br /> melhor tempo!</span>';
                            maximaPontuacao.classList.add('maximaPontuacaoAnimada')
                        }

                        setTimeout(function() {

                            const modal = document.getElementById('paresModal')
                            modal.style.opacity = '1'
                            modal.style.pointerEvents = 'auto'
                            jogoCompleto = null
                            temporizador = null
                            tempo = 0
                            document.getElementById('temporizador').innerHTML = tempo
                        }, 1000)
                    }
                }))
        }
        
    })
);

[...document.querySelectorAll('.voltar, .frente')].forEach(item => 
    item.addEventListener('click', function() {

        // encontre a classe do cartão que foi selecionado
        let cartaoVirado = this.parentNode.classList.value 

        // se o cartão não estiver virado, vire-o
        if (cartaoVirado == 'card' || cartaoVirado == 'card retornarCartao') {
            
            // dê ao cartão a classe 'virarCartao' e remova a classe 'retornarCartao', se necessário
            this.parentNode.classList.toggle('virarCartao')
            this.parentNode.classList.remove('retornarCartao')

            let cartasInvertidas = document.querySelectorAll('.virarCartao').length;

            if (cartasInvertidas % 2 == 1) {
                
                // dê à frente do cartão selecionado o id de selecionarCartao1
                this.nextElementSibling.id = 'selecionarCartao1'
                this.nextElementSibling.classList.add('selecionarCartao')

            } else if (cartasInvertidas % 2 == 0) {
                
                // dê à frente do cartão selecionado o id de selecionarCartao2
                this.nextElementSibling.id = 'selecionarCartao2'
                this.nextElementSibling.classList.add('selecionarCartao')

                const selecionarCartao1 = document.getElementById('selecionarCartao1')
                const selecionarCartao2 = document.getElementById('selecionarCartao2')

                let src1 = selecionarCartao1.childNodes[0].src 
                let src2 = selecionarCartao2.childNodes[0].src 

                if (src1 == src2) {
                    selecionarCartao1.parentNode.classList.add('parCombinado')
                    selecionarCartao2.parentNode.classList.add('parCombinado')

                    selecionarCartao1.removeAttribute('id')
                    selecionarCartao1.classList.remove('selecionarCartao')

                    selecionarCartao2.removeAttribute('id')
                    selecionarCartao2.classList.remove('selecionarCartao')


                } else {

                    // para parar o jogador de selecionar uma nova carta antes que ela termine
                    setTimeout(function() {

                        selecionarCartao1.parentNode.classList.toggle('retornarCartao')
                        selecionarCartao1.parentNode.classList.remove('virarCartao')

                        selecionarCartao2.parentNode.classList.toggle('retornarCartao')
                        selecionarCartao2.parentNode.classList.remove('virarCartao')
    
                        selecionarCartao1.removeAttribute('id')
                        selecionarCartao2.removeAttribute('id')
                    }, 1500)
                }
            }
            // se o cartão for virado, devolva-o para o verso voltado para cima
        } else if (cartasInvertidas === 'card virarCartao') {

            // dê ao cartão a classe 'retornarCartao' e remova a classe 'virarCartao'
            this.parentNode.classList.toggle('retornarCartao')
            this.parentNode.classList.remove('virarCartao')

            // remova o id de 'selectedCard1' da parte frontal do cartão
            document.getElementById('selecionarCartao1').removeAttribute('id')
            
        }
}));
// botão redefinir
document.getElementById('redefinirBtn').addEventListener('click', function() {
    console.log("clicks");

    const cartao = document.querySelectorAll('.card')
    const voltar = document.getElementsByClassName('voltar')
    const frente = document.getElementsByClassName('frente')
    const maximaPontuacao = document.getElementById('maximaPontuacao')
    const modal = document.getElementById('paresModal')

    for(let i = 0; i < cartao.length; i++) {
        // cartao[i].classList.remove(virarCartao)
        // cartao[i].classList.remove()
    }
    for(let j = 0; j < voltar.length; j++) {
        voltar[j].classList.remove('jogoCompleto')
    }
    for(let k = 0; k < frente.length; k++) {
        frente[k].classList.remove('selecionarCartao')
    }
    maximaPontuacao.style.fontSize = "0.25em"
    maximaPontuacao.innerHTML = ""
    modal.style.opacity = "0"
    modal.style.pointerEvents = "none"
    let jogoCompleto = 0
    
})