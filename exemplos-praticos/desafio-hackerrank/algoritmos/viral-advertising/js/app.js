let entradaString = 3;
let atualEntrada = 0;

function lerEntrada() {

    entradaString[atualEntrada++];
}

function principal() {

    const n = 3;

    const resultado = publicidadeViral(n);

    console.log(resultado);
}

principal();

function publicidadeViral(n) {

    // anunciam exatamente para 5 pessoas nas redes sociais.
    let compartilhar = 5;
    let curtida = 0;
    let totalCurtida = 0;

    // começando com o dia de lançamento pelo dia 1.
    for(let i = 1; i <= n; i++) {

        // No primeiro dia metade desses 5 pessoas curtem
        curtida = Math.floor(compartilhar / 2);
        // E cada uma compartilha com 3 de seus amigos.
        compartilhar = curtida * 3;
        // 
        totalCurtida += curtida;
    }

    // curtidas cumulativas naquele dia
    return totalCurtida;
}