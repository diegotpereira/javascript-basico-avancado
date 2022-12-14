let stringEntrada = ['25'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];

}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);

    const resultado = fatoriaisExtraLongos(n);

    console.log(resultado);
}

principal();

function fatoriaisExtraLongos(n) {

    n = BigInt(n); // 25n

    var resultado = BigInt(1); // resultado = 1n

    for(let i = n; i >= 1; i--) { // n = 25n...1n
        console.log(i);

        resultado *= i;
    }

    // return (resultado.toString());
    return resultado.toString(); // saída: 15511210043330985984000000
}