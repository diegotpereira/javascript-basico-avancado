let stringEntrada = ['6', '31415926535897932384626433832795', '1', '3', '10', '3', '5'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    let unsorted = [];

    for(let i = 0; i < n; i++) {

        const unsortedItem = lerEntrada();

        unsorted.push(unsortedItem);
    }

    const resultado = bigSorting(unsorted);

    console.log(resultado); // saída: (6) ['1', '3', '3', '5', '10', '31415926535897932384626433832795']
}

principal();

function bigSorting(unsorted) {

    // return unsorted.sort((a, b) => (BigInt(a) > BigInt(b) ? 0 : - 1));
    unsorted.sort((a, b) => {

        if(a.length === b.length) {

            return a > b ? 1 : -1;
        }

        return a.length - b.length;
    });
    return unsorted;
}