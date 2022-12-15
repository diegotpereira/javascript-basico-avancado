let stringEntrada = ['4'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = lerEntrada();

    try {
        
        console.log(parseInt(s).toString().replace('NaN', 'Bad String'));

    } catch (e) {
        
        console.log('Bad String');
    }
}

principal();