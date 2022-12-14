let stringEntrada = ['5', '1, 1, 1, 3, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const gravetos = lerEntrada().replace(/\s+$/g, '').split(' ').map(gravTemp => parseInt(gravTemp, 10));

    const resultado = maximoPerímetroTriangulo(gravetos);

    console.log(resultado);
}

principal();

function maximoPerímetroTriangulo(gravetos) {

    gravetos.sort((a, b) => b - a);
    let soma = 0;
    let elementos = [];


    for(let i = 2; i < gravetos.length; i++) { // comprimento graveto 5

        // 3 < 3 + 1 = 4
        // Se mais de um tiver esse máximo, escolha entre eles aquele com o maior lado mínimo .
        if(gravetos[i - 2] < (gravetos[i - 1] + gravetos[i])) {

            let somaTemp = gravetos[i] + gravetos[i - 1] + gravetos[i - 2]; // saída 7

            // Se mais de um tiver esse máximo também, imprima qualquer um deles.
            if(somaTemp > soma) { // 7 > 7

                soma = somaTemp; // soma = 7
                elementos = [gravetos[i], gravetos[i - 1], gravetos[i - 2]]; // 1 3 3
            }
        }
    }

    // comprimentos dos lados do triângulo escolhido em ordem não decrescente ou -1
    return elementos.length ? elementos : [-1];
}