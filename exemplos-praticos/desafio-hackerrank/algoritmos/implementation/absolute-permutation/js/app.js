let stringEntrada = ['3', '2, 1', '3, 0', '3, 2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < t; index += 1) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const n = parseInt(primeiraMultiplaEntrada[0], 10);
        const k = parseInt(primeiraMultiplaEntrada[1], 10);

        const resultado = absolutePermutation(n, k);

        console.log(resultado.join(' ') + '\n'); // 2 1 
                                                 // 1 2 3
                                                 // -1
    }
}

principal();

// function absolutePermutation(n, k) {

//     const d = {};

//     for(let index = 1; index <= n; index += 1) 

//         if(index - k > 0 && !d[index - k]) 

//             d[index - k] = index;
        
//         else if(index + k <= n && !d[index + k]) 

//             d[index + k] = index;

//         else 

//             return [-1];
    
//     return Object.values(d);
// }

function absolutePermutation(n, k) {

    let resultado = [];
    let has = {};
    let x;
    let y;

    for(let index = 1; index <= n; index += 1) {

        x = index - k;
        y = index + k;

        if(x > 0 && x <= n && has[x] === undefined) {

            resultado.push(x);
            has[x] = x;

        } else if(y > 0 && y <= n && has[y] === undefined) {

            resultado.push(y);
            has[y] = y;

        } else {

            return [-1];
        }
    }
    return resultado;
}