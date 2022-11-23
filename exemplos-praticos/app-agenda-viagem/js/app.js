const tempo = document.getElementById("tempo")
const saudacao = document.getElementById("saudacoes")
const nome = document.getElementById("nome");
const focus = document.getElementById("focus");
const manhaTarde = true

function exibirHora() {

    let hoje = new Date();
    let hora = hoje.getHours();
    let minutos = hoje.getMinutes();
    let segundos = hoje.getSeconds();

    // const madrugada = hora >= 0 && hora <= 5 ? 'Madrugada' : 'Manhã'
    // const tarde = hora >= 12 && hora <= 18 ? 'Tarde' : 'Noite'
    // ${manhaTarde ? madrugada : '' ?   manhaTarde ? tarde : '' : ''}

    const periodo = hora >= 0 && hora < 12 ? "Bom dia" : hora >= 12 && hora < 18 ? "Boa Tarde" : "Noite";

    tempo.innerHTML = `${hora}<span>: </span> ${adicionarZero(minutos)} <span> : <span> ${adicionarZero(segundos)} ${manhaTarde ? periodo : ''}`;

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
        saudacao.textContent = "Bom dia, ";
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";

    } else if(hora < 18) {
        saudacao.textContext = "Boa Tarde, ";
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')"

    } else {

        saudacao.textContent = "Boa noite, "
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        document.body.style.color = 'white'
    }
}

// Definir Nome

function definirNome(e) {

    if (e.type === 'keypress') {
        
        // Certifique-se de que enter está pressionado
        if (e.which == 13 || e.keyCode == 13) {
            
            localStorage.setItem('nome', e.target.innerText);
            nome.bur();

        } else {
            localStorage.setItem('nome', e.target.innerText);
        }
    }
}

function obterNome() {

    if (localStorage.getItem('nome') === null) {
        nome.textContent = '[Digite um Nome]';

    } else {

        nome.textContent = localStorage.getItem('nome')
    }
}

// Definir focu

function definirFocus(e) {

    if (e.type === 'keypress') {
        
        // Certifique-se de que enter está pressionado
        if (e.which == 13 || e.keyCode == 13) {
            
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();

        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

function obterFocus(e) {
    if (localStorage.getItem('focus') === null) {
        
        focus.textContent = '[Digite Focus]';

    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}
nome.addEventListener('keypress', definirNome);
nome.addEventListener('blur', definirNome)

focus.addEventListener('keypress', definirFocus);
focus.addEventListener('blur', definirFocus);

exibirHora();
definirPlanoFundoSaudacao();
obterNome();
obterFocus();