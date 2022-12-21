let stringEntrada = ['3', '1, 2, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const a = lerEntrada().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    var totalTrocas = 0;

    for(let i = 0; i < a.length; i += 1) {

        for(let j = 0; j < (a.length - i - 1); j += 1) {

            if(a[j] > a[j + 1]) {

                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;

                totalTrocas++;
            }
        }
    }
    console.log("Array is sorted in "+totalTrocas+" swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[n-1]);
}

principal();