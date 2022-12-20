let stringEntrada = ['5', '2, 4, 6, 8, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = insertionSort1(n, arr);

    console.log(resultado); // saída: 2 4 6 8 8
                                   // 2 4 6 6 8
                                   // 2 4 4 6 8
                                   // 2 3 4 6 8
}

principal();

function insertionSort1(n, arr) {

    for(let index = 1; index < arr.length; index += 1) {

        let atual = arr[index];
        let compare = index - 1;

        while ((compare > - 1) && (atual < arr[compare])) {
            
            arr[compare + 1] = arr[compare];
            compare -= 1;

            return ([...arr]);
        }
        arr[compare + 1] = atual;
    }

    return ([...arr]);
}