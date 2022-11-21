const tempo = document.getElementById("tempo")
const saudacao = document.getElementById("saudacoes")
const manhaTarde = true

function exibirHora() {

    let hoje = new Date();
    let hora = hoje.getHours();
    let minutos = hoje.getMinutes();
    let segundos = hoje.getSeconds();

    const madrugada = hora >= 0 && hora <= 5 ? 'Madrugada' : 'Manhã'
    const tarde = hora >= 12 && hora <= 18 ? 'Tarde' : 'Noite'

    tempo.innerHTML = `${hora}<span>: </span> ${adicionarZero(minutos)} <span> : <span> ${adicionarZero(segundos)} ${manhaTarde ? madrugada : '' ?   manhaTarde ? tarde : '' : ''}`;

    setTimeout(exibirHora, 1000)

    // console.log(hoje);
}


// Adicionar numeral zero

function adicionarZero(n) {

    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}



// Definir plano de fundo e saudação

function definirPlanoFundoSaudacao() {

    let hoje = new Date();
    hora = hoje.getHours();

    if(hora < 12) {
        console.log(manhã);

    } else if(hora < 18) {
        saudacao.textContext = "Boa Tarde, ";
        // document.body.style.color = "white";
    }
}

exibirHora();
definirPlanoFundoSaudacao();