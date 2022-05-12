document.querySelector('#rodar').addEventListener('click', rodar)

let ultimo = 0
let iteracoes = 10

function timeout() {
    // registra a hora desta chamada
    registroLinha(new Date().getMilliseconds())

    // se não terminarmos, agende a próxima chamada
    if (iteracoes-- > 0) {
        setTimeout(timeout, 0)
    }
}

function rodar() {
    // limpar o registro
    const registro = document.querySelector('#log')

    while (registro.lastElementChild) {
        registro.removeChild(registro.lastElementChild)
    }
    // inicializar a contagem de iteração e o carimbo de data/hora inicial
    iteracoes = 10
    ultimo = new Date().getMilliseconds()

    // iniciar tempo
    setTimeout(timeout, 0)
}

function pad(number) {
    return number.toString().padStart(3, 0)
}

function registroLinha(agora) {
    // registrar o último carimbo de data/hora, o novo carimbo de data/hora e a diferença
    const novaLinha = document.createElement('pre')
    novaLinha.textContent = `${pad(ultimo)} ${pad(agora)} ${agora - ultimo}`

    document.getElementById('log').appendChild(novaLinha)

    ultimo = agora
}