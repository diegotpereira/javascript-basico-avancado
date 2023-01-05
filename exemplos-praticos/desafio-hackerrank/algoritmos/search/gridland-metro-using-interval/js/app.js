let stringEntrada = ['4, 4, 3', '2, 2, 3', '3, 1, 4', '4, 4, 4'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraMultiplaEntrada[0], 10);
    const m = parseInt(primeiraMultiplaEntrada[1], 10);
    const k = parseInt(primeiraMultiplaEntrada[2], 10);

    let track = Array(k);

    for(let index = 0; index < k; index += 1) {

        track[index] = lerEntrada().replace(/\s+$/, '').split(' ').map(tTemp => parseInt(tTemp, 10));

    }

    const resultado = gridlandMetro(n, m, k, track);

    console.log(resultado + '\n');
}

principal();

function gridlandMetro(n, m, k, track) {

    // Organize as faixas por linha usando uma tabela de hash
    const intervalos = {};

    for(let index = 0; index < k; index += 1) {

        const [linha, inicial, final] = track[index];
        const intervalo = {

            inicial: inicial,
            final: final 
        }

        if(!intervalos.hasOwnProperty(linha)) {

            intervalos[linha] = [intervalo];

        } else {

            intervalos[linha].push(intervalo);
        }
    }
    let tracks = 0;

    // ir linha por linha que contém faixas e contar o número de faixas
    for(let r in intervalos) {

        // minPilha classifica o array pela primeira hora de início
        minPilha(intervalos[r]);

        let ultimo_final = 0;

        while (intervalos[r].length > 0) {
            
            // remover o primeiro intervalo da matriz
            let i = deleteMin(intervalos[r]);

            if (i.inicial > ultimo_final) {
                
                
                // se este intervalo começar após o final do último
                // intervalo ativado grava e atualiza novo last_end
                tracks = i.final - i.inicial + 1 + tracks;
                ultimo_final = i.final;

            } else if (i.final > ultimo_final) {
                // este intervalo sobrepõe um intervalo anterior
                // registra parte não sobreposta
                tracks = i.final - ultimo_final + tracks; // sem +1 desde last_end já foi contado acima
                ultimo_final = i.final;
            }
        }
    }
    // BigInt é importante aqui, caso contrário, falha em alguns dos casos de teste.
    let lampadas = BigInt(m) * BigInt(n) - BigInt(tracks);

    return lampadas;
}

function minPilha(arr) {

    const t = arr.length >> 1;

    for(let index = t; index >= 0; index -= 1) {

        baixoPilha(arr, index + 1);
    }
}
function baixoPilha(arr, t) {

    let c = t << 1;

    if(c > arr.length) return;

    if(c < arr.length && arr[c - 1].inicial > arr[c].inicial) c++;

    if (arr[c - 1].inicial < arr[t - 1].inicial) {
        
        troca(arr, c -1 , t - 1);
        baixoPilha(arr, c);
    }
}

function troca(arr, l, r) {

    const t = arr[l];

    arr[l] = arr[r];
    arr[r] = t;
}

function deleteMin(arr) {

    let n = arr.length - 1;

    if(n < 0) return n;

    const min = arr[0];

    arr[0] = arr[n];
    arr.length = n;

    baixoPilha(arr, 1);

    return min;
}