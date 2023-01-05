let stringEntrada = ['6','4, 10, 5, 4, 2, 10']
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    // console.log("oi");

    const n = parseInt(lerEntrada().trim(), 10);

    const A = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = solution(A);

    console.log(resultado);
   
}

principal();

function solution(A) {

    for(let index = 0; index < A.length; index += 1) {

        let contar = 0;

        for(let compare = 0; compare < A; index += 1) {

            if (A[index] == A[compare]) {
                
                contar++;
            }
        }
        if (contar == 1) {
            
            return A[index];
        }
    }

    return -1;
}