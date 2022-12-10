

function obterDinheiroGasto(teclado, dispositivo, orcamento) {

    let valorMax = -1;

    for(let i = 0; i < teclado.length; i++) {

        const precoTeclado = teclado[i];

        for(let j = 0; j < dispositivo.length; j++) {

            const precoDispositivo = dispositivo[j];

            if(precoTeclado + precoDispositivo <= orcamento && precoTeclado + precoDispositivo > valorMax) {

                valorMax = precoTeclado + precoDispositivo;
            }
        }
    }
    return valorMax;
    // console.log(teclado);
    // console.log(dispositivo);
    // console.log(orcamento);
}

function principal() {

    const orcamento = [10];
    const teclado = [3, 1];
    const dispositivo = [5, 2, 8];

    const resultado = obterDinheiroGasto(teclado, dispositivo, orcamento);

    console.log(resultado);
}

principal();
