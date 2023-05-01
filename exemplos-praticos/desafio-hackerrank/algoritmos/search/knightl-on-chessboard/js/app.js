// define o input
let stringEntrada = ['5'];

// define o índice de entrada atual como zero
let entradaAtual = 0;

// função para ler a entrada
function lerEntrada () {

    // retorna a entrada atual e incrementa o índice
    return stringEntrada[entradaAtual++];
}

// função principal
function principal() {

    // define n como a entrada lida convertida em um número
    const n = parseInt(lerEntrada().trim(), 10);

    // chama a função knightlOnAChessboard com n como argumento
    const resultado = knightlOnAChessboard(n);

    // exibe o resultado no console formatado como uma matriz
    console.log(resultado.map(x => x.join(' ')).join('\n') + '\n');
}

// chama a função principal
principal();

// função knightlOnAChessboard que recebe n como argumento
export function knightlOnAChessboard(n) {

    // array vazio para armazenar o resultado
    const resultado = [];

    // loop externo para percorrer as linhas
    for (let index = 1; index < n; index++) {
        
        // array vazio para armazenar os valores da linha
        const linha = [];

        // loop interno para percorrer as colunas
        for (let compare = 1; compare < n; compare++) {

            // cria uma matriz n x n preenchida com falses para marcar as células já visitadas
            const percorrido = new Array(n).fill(false).map(() => new Array(n).fill(false));

            // define uma fila para armazenar as células a serem visitadas, começando em (0, 0) com um mover de 0
            const fila = [{
                x: 0,
                y: 0, 
                mover: 0
            }];
            
            // loop para percorrer a fila até que ela esteja vazia
            while (fila.length > 0) {   
                
                // pega o próximo item da fila
                const atual = fila.shift();

                // obtém o valor x do item atual
                const x = atual.x;

                // obtém o valor y do item atual
                const y = atual.y;

                // obtém o valor mover do item atual
                const mover = atual.mover

                // se chegarmos ao final da matriz
                if (x === n - 1 && y === n - 1) {
                    
                    // adiciona o número de movimentos para chegar ao final na linha
                    linha.push(mover);

                    // sai do loop
                    break;
                }

                // se a célula já foi visitada
                if (percorrido[x][y]) {
                    
                    // pula para a próxima iteração
                    continue;                }

                // marca a célula como visitada
                percorrido[x][y] = true;

                // adiciona a célula da parte superior direita se estiver dentro dos limites da matriz
                if (x + index < n && y + compare < n) {

                    // adiciona a célula na fila com um movimento a mais
                    fila.push({ x: x + index, y: y + compare, mover: mover + 1});
                    
                }

                // adiciona a célula da parte inferior direita se estiver dentro dos limites da matriz
                if (x + index < n && y - compare >= 0) {
                    
                    fila.push({ x: x + index, y: y - compare, mover: mover + 1})
                }

                // adiciona a célula da parte superior esquerda se estiver dentro dos limites da matriz
                if (x - index >= 0 && y + compare < n) {
                    
                    fila.push({ x: x - index, y: y + compare, mover: mover + 1});
                }

                // adiciona a célula da parte inferior esquerda se estiver dentro dos limites da matriz
                if (x - index >= 0 && y - compare >= 0) {
                    
                    fila.push({ x: x - index, y: y - compare, mover: mover + 1});
                }

                // Verifica se a posição atual não é igual à posição de destino
                if (index !== compare) {
                    

                    // Verifica se é possível se mover na diagonal superior direita
                    if (x + compare < n && y + index < n) {
                        
                        fila.push({ x: x + compare, y: y + index, mover: mover + 1})
                    }

                    // Verifica se é possível se mover na diagonal inferior direita
                    if (x + compare < n && y - index >= 0) {

                        fila.push({ x: x + compare, y: y - index, mover: mover + 1 });
                        
                    }

                    // Verifica se é possível se mover na diagonal superior esquerda
                    if (x - compare >= 0 && y + index < n) {
                        
                        fila.push({ x: x - compare, y: y + index, mover: mover + 1});
                    }

                    // Verifica se é possível se mover na diagonal inferior esquerda
                    if (x - compare >= 0 && y - index >= 0) {
                        
                        fila.push({ x: x - compare, y: y - index, mover: mover + 1})
                    }
                }
            }

            // Verifica se a linha atual foi completamente percorrida
            if (linha.length !== compare) {
                
                linha.push(-1);
            }
        }
        
        resultado.push(linha);
    }

    return resultado;

}


