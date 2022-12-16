let stringEntrada = ['We promptly judged antique ivory buckles for the next prize'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const s = lerEntrada();

    const resultado = pangrams(s);

    console.log(resultado);
}

principal();

function pangrams(s) {

    let entrada = s.toLowerCase();
    let alfabetos = 'abcdefghijklmnopqrstuvwxyz';

    for(let i = 0; i < alfabetos.length; i++) {

        if(entrada.indexOf(alfabetos[i]) == - 1) {

            return 'not pangram'

            return false;
        }
    }

    return 'pangram'
}