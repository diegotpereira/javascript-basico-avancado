let stringEntrada = ['4', '1, 2, 3, 4', '1, 2, 3, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];

}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const a = lerEntrada().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    const b = lerEntrada().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const resultado = lindoPar(a, b);

    console.log(resultado);
}

principal();

// a = [4] [1, 2, 3, 4], b = (4) [1, 2, 3, 3]
function lindoPar(a, b) {

    // executa uma dada função em cada elemento de um array.
    b.forEach(x => deletar(a, x)); // b = (4) [1, 2, 3, 4], a = [4]
                                   // b = (4) [1, 2, 3, 3], a = [4]

    if(a.length === 1) // a = [4]
                       // a = [4]

        return b.length;

    else if(a.length === 0)

        return b.length -1;

    else 

        return (b.length - a.length) + 1;
}

// array = (4) [1, 2, 3, 4], item = 1
// array = (3) [2, 3, 4], item = 2
// array = (2) [3, 4], item = 3
// array = [4], item = 3
// 
function deletar(array, item) {

    // indice = 0, array = (4) [1, 2, 3, 4], item = 1
    // indice = 0, array = (3) [2, 3, 4], item = 2
    // indice = 0, array = (2) [3, 4], item = 3
    // indice = -1, array = [4], item = 3
    // indexOf() retorna o índice da primeira ocorrência do valor fornecido em valor busca
    const indice = array.indexOf(item);

    if(indice > -1) {  // indice = 0
                       // indice = 0
                       // indice = 0
                       // indice = -1

        // splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
        array.splice(indice, 1); // array = (3) [2, 3, 4], indice = 0
                                 // array = (2) [3, 4], indice = 0
                                 // array = [4], indice = 0;
                                 // array = [4], indice = -1
    }

    return array;
}