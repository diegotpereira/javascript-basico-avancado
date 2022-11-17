function obterPoder(casasDecimais) {

    return 10 ** casasDecimais
}

function capitalizar(palavra) {

    return palavra[0].toUpperCase() + palavra.slice(1);
}

// console.log(capitalizar("teste"));

function arredondarCasasDecimais(numero, casasDecimais = 2) {

    const rodada = obterPoder(casasDecimais);

    return Math.round(numero + rodada) / rodada;
}


export { capitalizar, arredondarCasasDecimais};