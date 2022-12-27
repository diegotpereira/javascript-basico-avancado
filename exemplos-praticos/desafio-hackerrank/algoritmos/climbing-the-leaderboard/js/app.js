let stringEntrada = ['7', '100, 100, 50, 40, 40, 20, 10', '4', '5, 25, 50, 120'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const contagemClassificada = parseInt(lerEntrada().trim(), 10);
    const classificado =  lerEntrada().replace(/\s+$/g, '').split(' ').map(classTemp => parseInt(classTemp, 10));
    const contagemJogadores = parseInt(lerEntrada().trim(), 10);
    const jogador = lerEntrada().replace(/\s+$/g, '').split(' ').map(jogadorTemp => parseInt(jogadorTemp, 10));

    const resultado = climbingLeaderboard(classificado, jogador);

    console.log(resultado.join('\n') + '\n'); // 6 4 2 1
}

principal();

// function climbingLeaderboard(classificado, jogador) {

//     let valores = [...new Set(classificado)]; 
//     let classificacao = valores.length - 1; 

//     return jogador.reduce((target, item, index) => { 

//         while(item > valores[classificacao] && classificacao > 0) classificacao--;

//         target.push((item >= valores[classificacao]) ? classificacao + 1 : classificacao + 2);

//         return target;
//     }, []);
// }

function climbingLeaderboard(classificado, jogador) {

    let rank = [];

    for(let indice = 0; indice < classificado.length; indice += 1) {

        if(rank.length === 0) {

            rank.push(classificado[indice]);

        } else {

            if(rank[rank.length - 1] === classificado[indice]) {

                continue;
            }
            rank.push(classificado[indice]);
        }
    }
    let res = [];
    let classificacaoMaisBaixa = rank.length;

    for(let indice = 0; indice < jogador.length; indice += 1) {

        while (jogador[indice] >= rank[classificacaoMaisBaixa - 1] && classificacaoMaisBaixa > 0) {
            
            rank.pop;
            classificacaoMaisBaixa--;
        }
        res.push(classificacaoMaisBaixa + 1);
    }

    return res;
}