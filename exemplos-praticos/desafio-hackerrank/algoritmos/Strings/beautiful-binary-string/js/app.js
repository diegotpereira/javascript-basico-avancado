let stringEntrada = ['7', '0101010'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const b = lerEntrada();

    const resultado = beautifulBinaryString(b);

    console.log(resultado); // saída = 2
}

principal();

function beautifulBinaryString(b) { // b = '0101010'

    let indice = b.indexOf('010'); // indice = 0, b = '0101010'
    let i = 0; // indice = 2

    while (indice > -1) { // indice = 0, indice = 4
        
        i++; // i = 1, i = 2
        b = b.split(''); // b = (7) ['0', '1', '0', '1', '0', '1, '0'], b = (7) ['0', '1', '1', '1', '0', '1, '0']
        b[indice + 2] = '1'; // indice = 0, indice = 4;
        b = b.join(''); // b = '0111010', b = 0111011
        indice = b.indexOf('010'); // indice = -1
    }
    return i; // i = 2
}

