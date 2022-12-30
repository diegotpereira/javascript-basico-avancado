let stringEntrada = ['3, 12, 5, 7'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}


function principal() {

    var arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(mtxTemp => parseInt(mtxTemp, 10));

    ehPrimo(arr);
}


principal();

function ehPrimo(arr) {

    const [n, ...elements] = arr;
    elements.forEach((str) => {
        const n = Number(str)
        if (n === 2) {
            console.log("Prime")
            return
        }
        if (n === 1 || n % 2 === 0) {
            console.log("Not prime")
            return
        }
        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) {
                console.log("Not prime")
                return
            }
        }
        console.log("Prime")
    })
}