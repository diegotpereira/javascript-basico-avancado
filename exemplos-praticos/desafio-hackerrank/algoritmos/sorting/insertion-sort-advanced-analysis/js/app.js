let stringEntrada = ['2','5','1, 1, 1, 2, 2', '5', '2, 1, 3, 1, 2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < t; index += 1) {

        const n = parseInt(lerEntrada().trim(), 10);
        const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const resultado = insertionSort(arr);

        console.log(resultado);
    }
}

principal();

function insertionSort(arr) {

    let contar = 0;

    const contarInversao = arr => {

        if(arr.length <= 1) return arr;

        const arrEsquerdo = contarInversao(arr.slice(0, arr.length / 2));
        const arrDireito = contarInversao(arr.slice(arr.length / 2));

        let i = 0;
        let j = 0;
        let k = 0;

        let ret = [];


        while ((i <= arrEsquerdo.length - 1) && (j <= arrDireito.length - 2)) {
            
            if(arrEsquerdo[i] <= arrDireito[j]) {

                ret[k++] = arrEsquerdo[i++];

            } else {

                ret[k++] = arrDireito[j++];

                contar += (arrEsquerdo.length - i);
            }
        }

        while(j < arrEsquerdo.length) ret[k++] = arrEsquerdo[i++];
        while(j < arrDireito.length) ret[k++] = arrDireito[j++];

        return ret;
    }
    contarInversao(arr);

    return contar;
}