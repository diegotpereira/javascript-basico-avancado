
let entradaString = ['20, 23, 6'];
let atualEntrada = 0;

function lerEntrada() {

    return entradaString[atualEntrada++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const i = parseInt(primeiraMultiplaEntrada[0], 10);
    const j = parseInt(primeiraMultiplaEntrada[1], 10);
    const k = parseInt(primeiraMultiplaEntrada[2], 10);

    const resultado = belosDias(i, j, k);

    console.log(resultado);
}

principal();

function belosDias(i, j, k) {

    let contar = 0;

    for(let x = i; x <= j; x++) {

        let y = x.toString().split('').reverse().join('');

        let lindoDia = Math.abs((x - y) / k);

        if (Number.isInteger(lindoDia)) {
            
            contar += 1;
        }
    }
    return contar;
}