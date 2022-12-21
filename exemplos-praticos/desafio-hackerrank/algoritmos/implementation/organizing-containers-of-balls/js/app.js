let stringEntrada = ['2', '2', '1, 1', '1, 1', '2', '0, 2', '1, 1'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < q; index += 1) {

        const n = parseInt(lerEntrada().trim(), 10);

        let container = Array(n);

        for(let index = 0; index < n; index += 1) {

            container[index] = lerEntrada().replace(/\s+$/g, '').split(' ').map(ctTemp => parseInt(ctTemp, 10));
        }

        const resultado = organizingContainers(container);

        console.log(resultado);
    }
}

principal();

function organizingContainers(container) {

    let n = container.length;
    let c = {};
    let t = {};

    for(let index = n; index--> 0;) {

        for(let j = n; j--> 0;) {

            let x = container[index][j];

            c[index] = c[index] ? c[index] + x : x;
            t[j] = t[j] ? t[j] + x : x;
        }
    }

    for(let index = 0; index < n; index += 1) {

        let j = 0;

        for(j = index; j < n; j += 1) {

            if(c[index] == t[j]) {

                let tmp = t[j];

                t[j] = t[index];
                t[index] = tmp;
                break;
            }
        }
        if(j == n)

            return 'Impossivel';
    }
    return 'Possivel';
}