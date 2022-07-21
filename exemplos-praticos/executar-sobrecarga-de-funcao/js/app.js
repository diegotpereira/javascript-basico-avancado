// programa para realizar sobrecarga de funções

// Usando a instrução if/else-if
function somar() {

    // se não houver argumento
    if (arguments.length == 0) {
        console.log('Você não passou nenhum argumento');
    }
    // se apenas um argumento
    else if (arguments.length == 1) {
        console.log('Passe pelo menos dois argumentos');
    }
    // vários argumentos
    else {
        let resultado = 0
        let comprimento = arguments.length

        for(index = 0; index < comprimento; index++) {
            resultado = resultado + arguments[index]
        }
        console.log(resultado);
    }
}
somar()
somar(5)
somar(5, 9)
somar(1, 2, 3, 4, 5, 6, 7, 8, 9)


// Usando a instrução switch
function somar1() {

    switch (arguments.length) {
        case 0:
            console.log('Você não passou nenhum argumento');
            break;
        case 1:
            console.log('Passe pelo menos dois argumentos');
            break;
    
        default:
            

        let resultado1 = 0
        let comprimento1 = arguments.length

        for(index = 0; index < comprimento1; index++) {
            resultado1 = resultado1 + arguments[index]
        }
        console.log(resultado1);
        break
    }
}
somar1()
somar1(5)
somar1(5, 9)
somar(1, 2, 3, 4, 5, 6, 7, 8, 9)