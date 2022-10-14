const texto = document.querySelector(".texto")
const strTexto = texto.textContent
const splitTexto = strTexto.split("")

// 
texto.textContent = "";

for(let i = 0; i < splitTexto.length; i++) {

    texto.innerHTML += "<span>" + splitTexto[i] + "</span>";
}

let caracter = 0;
let temporizador = setInterval(noTique, 50);

function noTique() {

    const span = texto.querySelectorAll('span')[caracter];

    span.classList.add('fade')

    caracter++

    if(caracter === splitTexto.length) {

        completo()

        return 
    }
}

function completo() {

    clearInterval(temporizador)
    temporizador = null
}




var minhaString = 'Ola mundo. Como você está?'
var splits = minhaString.split(' ', 3)

console.log(splits);