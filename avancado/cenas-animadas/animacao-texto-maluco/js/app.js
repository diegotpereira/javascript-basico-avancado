var texto = document.querySelector('.texto');

if (texto.classList.contains('desaparece'))

var textoC = texto.textContent;
var textoSplit = textoC.split('');

texto.textContent = '';
let caracter = 0;
let contar = 0

for(var i = 0; i < textoSplit.length; i++) {

    texto.innerHTML += `<span> ${textoSplit[i]}</span>`;
}

var anima = setInterval(funcCampo, 200);

function funcCampo() {

    var vermelho = Math.random() * 255 + 0;
    var azul = Math.random() * 255 + 0;
    var verde = Math.random() * 255 + 0;

    const span = texto.querySelectorAll('span')[caracter];

    span.classList.toggle('desaparece');
    span.style.color = `rgb(${vermelho}, ${azul}, ${verde})`;

    caracter++;

    setTimeout(funcCampo, 5000);

    if (caracter === textoSplit.length) {
        
        caracter = 0;

        clearTimeout(funcCampo);

        funcCampo();
    }
}