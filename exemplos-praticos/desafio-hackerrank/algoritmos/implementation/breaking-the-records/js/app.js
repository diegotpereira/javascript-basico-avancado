
function quebraRegistros(pontuacoes) {

    let jogos = pontuacoes;

    let min = jogos[0];
    let max = jogos[0];

    let minGravado  = 0;
    let maxGravado = 0;

    for(const pontuacao of pontuacoes) {
        
        // recordes de mais e menos pontos marcados durante a temporada.
        if(max < pontuacao) {

            max = pontuacao;
            maxGravado++;

        } else if (pontuacao < min) {
            
            min = pontuacao;
            minGravado++
        }
    }

    return [maxGravado, minGravado];
}

console.log(quebraRegistros([10, 5, 20, 20, 4, 5, 2, 25, 1]));