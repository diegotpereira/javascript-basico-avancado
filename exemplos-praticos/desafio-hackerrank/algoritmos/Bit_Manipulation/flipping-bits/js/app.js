let stringEntrada = ['3', '2147483647', '1', '0'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const consultas = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < consultas; index++) {
        
        const n = parseInt(lerEntrada().trim(), 10);
        const resultado = flippingBits(n);

        console.log(resultado + '\n');
        
    }
}

principal();

// function flippingBits(n) {

//     return ~n>>>0;
// }

function flippingBits(n) {

    let bNum = n.toString(2);
    let arr = Array.from({

        length: 32
    }).fill(0);
    let _32Bit = arr.slice(0, arr.length - bNum.length).concat(...bNum);

    return parseInt(_32Bit.map((v) => (v == "0" ? 1 : 0)).join(""), 2);
}