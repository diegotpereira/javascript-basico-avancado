

let entradaString = ['4', '7', 'RBY_YBR', '6', 'RBY_YBR', '2', '--', '6', 'B_RRBR'];
let entradaAtual = 0;

function lerEntrada() {

    return entradaString[entradaAtual++];
}

function principal() {

    const g = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < g; i++) {

        const n = parseInt(lerEntrada().trim(), 10);

        const b = lerEntrada();

        const resultado = joaninhasFelizes(b);

        console.log(resultado);
    }
}

principal();


function joaninhasFelizes(b) {

    var re = /_/;

    if(b.search(re) != -1) {

        var f = obterFrequencia(b);
        var soma = 0;

        for(let chave in f) {

            if(chave != "_" && f[chave] === 1) {

                soma++;
            }
        }

        if(soma > 0) {

            console.log("NAO");

        } else {

            console.log("SIM");
        }
    } else {

        var re2 = /[A-Z]/;

        if(b.search(re2) != -1) {

            var arr = b.split(' ');
            var soma2 = 0;

            for(let i = 0; i < arr.length; i++) {

                if(arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {

                    soma2++;
                }
            }

            if(soma2 > 0) {

                console.log("NAO");

            } else {

                console.log("SIM");
            }
        } else {

            console.log("NAO");
        }
    }
} 

function obterFrequencia(str) {

    var freq = {};

    for(let i = 0; i < str.length; i++) {

        var caracter = str.charAt(i);

        if(freq[caracter]) {

            freq[caracter]++;

        } else {

            freq[caracter] = 1;
        }
    }

    return freq;
}