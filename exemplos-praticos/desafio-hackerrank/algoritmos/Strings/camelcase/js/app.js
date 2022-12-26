let stringEntrada = ['saveChangesInTheEditor'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const s = lerEntrada();

    const resultado = camelcase(s);

    console.log(resultado);
}

principal();

function camelcase(s) {

    let contar = 0;

    for(let index = 0; index < s.length; index += 1) {

        if(s.charCodeAt(index) >= 65 && s.charCodeAt(index) <= 90) {

            contar += 1;
        }
    }
    contar += 1;
    return contar;
}