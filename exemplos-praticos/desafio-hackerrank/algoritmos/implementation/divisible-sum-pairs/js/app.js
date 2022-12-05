// const ar = [1, 3, 2, 6, 1, 2]
// const n = 6;
// const k = 3;

function paresSomaDivisivel (n, k, ar) {

    let resultado = 0;

    // Percorrendo pares i, j
    for(let i = 0; i < ar.length; i++) {

        for(let j = i + 1; i < ar.length; j++) {

            // se pares forem divisivel por k 
            if((ar[i] + ar[j]) % k === 0) {

                resultado += 1;
            }
        }
    }

    return resultado;
}

const result = paresSomaDivisivel (n, k, ar);

console.log(result);

console.log("oi");
