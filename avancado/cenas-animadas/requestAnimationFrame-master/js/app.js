const animacao = (elemento, dist, duracao) => {

    let iniciar = null

    elemento.style.position = 'absolute'

    function mover(timestamp) {
        
        if(!iniciar) iniciar = timestamp
        // console.log(timestamp);

        let tempoExecucao = timestamp - iniciar
        // console.log(tempoExecucao);
        let progresso = tempoExecucao / duracao 
        // console.log(progresso);
        progresso = Math.min(progresso, 1)
        elemento.style.left = (dist * progresso).toFixed(2) + 'px'

        if (tempoExecucao < duracao) {
            window.requestAnimationFrame(mover)
        }
    }
    window.requestAnimationFrame(mover)
}

let btnClicar = document.querySelector('.animacao-de-gatilho')

btnClicar.addEventListener('click', () => {

    console.log("iniciando");

    let elemento = document.getElementById('algumElementoVoceDesejaAnimar')

    animacao(elemento, 400, 2000)
})