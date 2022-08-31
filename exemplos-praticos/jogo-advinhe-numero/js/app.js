var numeroAleatorio = Math.floor(Math.random() * 100) + 1
var palpites = document.querySelector('.palpites')
var ultimoResultado = document.querySelector('.ultimoResultado')
var baixoOuAlto = document.querySelector('.baixoOuAlto')
var botaoPalpite = document.querySelector('.btnEnvioPalpite')
var campoPalpite = document.querySelector('.campoPalpite')

var contarPalpites = 1
var botaoReinicio

campoPalpite.focus()
console.log(numeroAleatorio);

function conferirPalpite() {

    var palpiteUsuario = Number(campoPalpite.value)

    if (contarPalpites === 1) {
        
        palpites.textContent = 'Palpites anteriores '
    }
    palpites.textContent += palpiteUsuario + ' '

    

    if (palpiteUsuario === numeroAleatorio) {
        
        ultimoResultado.textContent = 'Parabéns! Você Acertou!'
        ultimoResultado.style.backgroundColor = 'green'
        baixoOuAlto.textContent = ''
        fimDeJogo()

    } else if (contarPalpites === 10) {
        ultimoResultado.textContent = 'Fim de Jogo! Você Perdeu!'
        baixoOuAlto.textContent = ''
        fimDeJogo()

    } else {
        ultimoResultado.textContent = 'Errado! Tente Outro Número!'
        ultimoResultado.style.backgroundColor = 'red'

        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite foi baixo'

        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite foi alto'
        }
    }
    contarPalpites++
    campoPalpite.value = ''
    campoPalpite.focus()
}

function fimDeJogo() {
    campoPalpite.disabled = true 
    botaoPalpite.disabled = true 

    botaoReinicio = document.createElement('button')
    botaoReinicio.textContent = 'Iniciar Novo Jogo'

    document.body.appendChild(botaoReinicio)

    botaoReinicio.addEventListener('click', reiniciarJogo)
}

function reiniciarJogo() {
    conferirPalpite = 1

    var reinciarParametros = document.querySelectorAll('.resultadoPalpite p')

    for(var i = 0; i < reinciarParametros.length; i++) {

        reinciarParametros[i].textContent = ''
    }
    botaoReinicio.parentNode.removeChild(botaoReinicio)
    campoPalpite.disabled = false
    botaoPalpite.disabled = false 

    campoPalpite.value = ''
    campoPalpite.focus()

    ultimoResultado.style.backgroundColor = 'white'
    numeroAleatorio = Math.floor(Math.random() * 100) + 1
}
botaoPalpite.addEventListener('click', conferirPalpite)