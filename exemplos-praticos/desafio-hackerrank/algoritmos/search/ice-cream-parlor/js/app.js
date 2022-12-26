let stringEntrada = ['2', '4', '5', '1, 4, 5, 3, 2', '4', '4', '2, 2, 4, 3'];
let entradaAtual = 0;

function lerEntrada () {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < t; index += 1) {

        const m = parseInt(lerEntrada().trim(), 10);
        const n = parseInt(lerEntrada().trim(), 10);
        const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const resultado = icecreamParlor(m, arr);

        console.log(resultado.join(' '));
    }
}

principal();

function icecreamParlor(m, arr) {

    for(let index = 0; index < arr.length; index += 1) {

        for(let compare = index + 1; compare < arr.length; compare += 1) {

            if(m === arr[index] + arr[compare]) {

                if(m === arr[index] + arr[compare]) {

                    return ([index + 1, compare + 1]);
                }
            }
        }
    }
}