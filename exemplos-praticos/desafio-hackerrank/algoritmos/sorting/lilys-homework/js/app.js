let stringEntrada = ['4', '2, 5, 3, 1'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}


function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = lilysHomework(arr);

    console.log(resultado + '\n');
}

principal();

// function lilysHomework(arr) {

//     const x = [...arr].sort((a, b) => a - b); // x = [1, 2, 3, 5]
//     const s = (a) => {

//         const mapa = new Map(); // mapa = { 2 => 0, 5 => 1, 3 => 2, 1 => 3}

//         a.forEach((v, i) => mapa.set(v, i)); // a = [2, 5, 3, 1]

//         let p = 0;

//         for(let [index, e] of a.entries()) {

//             if(e !== x[index]) {

//                 p++;

//                 const j = mapa.get(x[index]);

//                 mapa.set(e, j);// e = 2, j = 3
//                                  // e = 5, j = 3
//                 a[j] = e;
//             }
//         }

//         return p;
//     }

//     return Math.min(s([...arr]), s(arr.reverse()));
// }


function lilysHomework(arr) {

    const classificado = arr.slice().sort((x, y) => x - y);
    const sw = a => {

        const mapa = new Map();

        a.forEach((a_i, i) => mapa.set(a_i, i));

        return a.reduce((trocas, a_i, i) => {

            if(a_i !== classificado[i]) {

                const j = mapa.get(classificado[i]);
                a[j] = a_i, mapa.set(a_i, j), trocas++;
            }

            return trocas;
        }, 0);
    }

    return Math.min(sw(arr.slice()), sw(arr.reverse()));
}