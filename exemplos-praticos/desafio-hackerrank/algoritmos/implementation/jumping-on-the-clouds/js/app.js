
// entradas 
let entradaString = ['7', '0, 0, 1, 0, 0, 1, 0'];
let entradaAtual = 0;

function lerEntrada() {

    return entradaString[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const c = lerEntrada().replace(/\s+$/g, '')
                          .split(' ')
                          .map(cTemp => parseInt(cTemp, 10));

    const resultado = pularNuvens(n, c);

    console.log(resultado); // saída: 4
}

principal();

function pularNuvens(n, c) {

    // número de numvens para pular
    var contarNuvem = 0;
    var i = 0;

    // console.log(n); // saída: 7
    // console.log(i); // saída: 0
    // console.log(c);
    // console.log(i < n); // saída: true
    while (i < n) {
        // posicao da nuvem 1 ou 2
        // console.log(i + 2); // saída: 2 3 5 6 8
        // console.log(c[i + 2]);
        if (c[i + 2] === 0) {

            // console.log("primeiro if " + c[i + 2] === 0); // saída: false false
            
            // console.log("console 1 " + contarNuvem++); // saída: 1 3
            contarNuvem++;
            i += 2;
            
            // console.log("if");
            // break;
            
            // console.log(); // saída: 3 6

            // console.log(i + 1); // saída: 4 7
        } 
        else if (c[i + 1] === 0) {

            // console.log("segundo if " + c[i + 1] === 0); // saída: false false
            
            contarNuvem++;
            // console.log("console 2 " + contarNuvem++); // saída: 0 2
            // contarNuvem++
            i++;

            // console.log("else if");
            // break;
            // console.log(i++); // saída 0 3

        } else {

            i++;
            // console.log(i++); // 6
            // console.log("else");
            // break;
        }
        
    }

    // console.log(contarNuvem); // saída: 4
    return contarNuvem;
}