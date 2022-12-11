
let entradaString = ['2','4,3', '-1, -3, 4, 2', '4, 2', '0, -1, 2, 1'];
let atualEntrada = 0;

function lerEntrada() {

    return entradaString[atualEntrada++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < t; i++) {

        const primeiraEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

        const n = parseInt(primeiraEntrada[0], 10);

        const k = parseInt(primeiraEntrada[1], 10);

        const a = lerEntrada().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

        const resultado = professorZangado(k, a);

        console.log(resultado);
                              
    }
}

principal();

function professorZangado(k, a) {

    let contar = 0;

    for(let i = 0; i < a.length; i++) {

        if(a[i] <= 0) {

            contar += 1;

        } 
    }

    return contar >= k ? 'NÃO' : 'SIM'
}