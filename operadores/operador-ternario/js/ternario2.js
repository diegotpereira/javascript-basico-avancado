function minhaFunc() {
    // numero aleatorio entre 0 e 9
    let n = Math.floor(Math.random() * 10)
    let numero =
        (n == 0) ? 'zero' :
        (n == 1) ? 'um' :
        (n == 2) ? 'dois' :
        (n == 3) ? 'tres' :
        (n == 4) ? 'quatro' :
        (n == 5) ? 'cinco' :
        'número maior que cinco'

    document.querySelector('#demo').innerHTML = numero
}