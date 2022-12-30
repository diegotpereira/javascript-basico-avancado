let stringEntrada = ['4, 4, 1', '1, 2, 3, 4', '5, 6, 7, 8', '9, 10, 11, 12', '13, 14, 15, 16'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const multiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const m = parseInt(multiplaEntrada[0], 10);
    const n = parseInt(multiplaEntrada[1], 10);
    const r = parseInt(multiplaEntrada[2], 10);

    let matriz = Array(m);

    for(let indice = 0; indice < m; indice += 1) {

        matriz[indice] = lerEntrada().replace(/\s+$/g, '').split(' ').map(mtxTemp => parseInt(mtxTemp, 10));

    }

    matrixRotation(matriz, r);
}

principal();

function matrixRotation(matriz, r) {

    const linha = matriz.length; // linha = 4
    const coluna = matriz[0].length; // coluna = 4
    const camada = Math.min(linha, coluna) / 2; // camada = 2
    const dividir = [];

    for(let indice = 0; indice < camada; indice += 1) {

        const temp = [];

        for(let compare = indice; compare < coluna - indice; compare += 1) {

            temp.push(matriz[indice][compare]);
        }

        for(let compare = indice + 1; compare < linha - indice; compare += 1) {

            temp.push(matriz[compare][coluna - indice - 1]);
        }

        for(let compare = coluna - indice - 2; compare >= indice; compare -= 1) {

            temp.push(matriz[linha - indice - 1][compare]);
        }

        for(let compare = linha - indice - 2; compare > indice; compare -= 1) {

            temp.push(matriz[compare][indice]);
        }
        dividir.push(temp);
    }
    // rotação
    for (let indice = 0; indice < camada; indice += 1) {

        const temp = [];

        for (let compare = 0; compare < dividir[indice].length; compare += 1) {
            
            temp.push(dividir[indice][(compare + r) % dividir[indice].length]);
            
        }
        dividir[indice] = temp;
    }
    // mesclar
    for(let indice = 0; indice < camada; indice += 1) {

        let index = 0;

        for(let compare = indice; compare < coluna - indice; compare += 1) {

            matriz[indice][compare] = dividir[indice][index++];
        }

        for (let compare = indice + 1; compare < linha - indice; compare++) {
            
            matriz[compare][coluna - indice - 1] = dividir[indice][index++];

        }

        for (let compare = coluna - indice - 2; compare >= indice; compare -= 1) {
            
            matriz[linha - indice - 1][compare] = dividir[indice][index++];
            
        }

        for (let compare = linha - indice - 2; compare > indice; compare -= 1) {
            
            matriz[compare][indice] = dividir[indice][index++];
            
        }
    }

    for (let indice = 0; indice < linha; indice += 1) {
        
        let str = "";

        for (let compare = 0; compare < coluna; compare += 1) {
            
            str += matriz[indice][compare] + " ";
            
        }
        
        console.log(str);
    }
}