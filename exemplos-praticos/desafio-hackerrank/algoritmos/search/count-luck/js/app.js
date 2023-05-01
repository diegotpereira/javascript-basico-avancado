// define o input
// let stringEntrada = ['11','.X.X......X','.X*.X.XXX.X','.XX.X.XM...', '......XXXX.', '4'];
let stringEntrada = [
    '3',
    '2 3',
    '*.M',
    '.X.',
    '1',
    '4 11',
    '.X.X......X',
    '.X*.X.XXX.X',
    '.XX.X.XM...',
    '......XXXX.',
    '3',
    '4 11',
    '.X.X......X',
    '.X*.X.XXX.X',
    '.XX.X.XM...',
    '......XXXX.',
    '4'
  ];
  

// define o índice de entrada atual como zero
let entradaAtual = 0;

// função para ler a entrada
function lerEntrada () {

    // retorna a entrada atual e incrementa o índice
    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = lerEntrada().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        let matrix = [];

        for (let i = 0; i < n; i++) {
            const matrixItem = lerEntrada();
            matrix.push(matrixItem);
        }

        const k = parseInt(lerEntrada().trim(), 10);

        const resultado = countLuck(matrix, k);

        console.log(resultado + '\n');
    }
}

principal();



export function countLuck(matrix, k) {

    // função auxiliar para checar se um movimento é válido
    function eh_valido_nome(x, y) {
        
        // um movimento é válido se as coordenadas estiverem dentro dos limites da matriz 
        // e o valor naquela posição for um ponto (.) ou um asterisco (*)
        return 0 <= y && y < m_matrix.length && 0 <= x && x < m_matrix[y].length && ['.', '*']
                .includes(m_matrix[y][x]);
    }
  
    // função principal que realiza a travessia da matriz recursivamente
    function traverse(x, y, decisoes) {

        // se o asterisco for encontrado, a função retorna verdadeiro (sucesso)
        if (m_matrix[y][x] == '*') {

            return true;

        } else {
            
            // constantes para representar os possíveis movimentos
            const LEFT = 1;
            const RIGHT = 2;
            const UP = 3;
            const DOWN = 4;
    
            // determina quais movimentos são válidos a partir da posição atual
            let mover = [];

                if (eh_valido_nome(x-1, y)) {
                    
                    mover.push(LEFT);
                }
                if (eh_valido_nome(x+1, y)) {

                    mover.push(RIGHT);
                }
                if (eh_valido_nome(x, y-1)) {

                    mover.push(UP);
                }
                if (eh_valido_nome(x, y+1)) {

                    mover.push(DOWN);
                }
    
            // marca a célula atual como visitada
            let tem_decisao = mover.length > 1 ? 1 : 0;

            if (m_matrix[y][x] == 'M') {

                m_matrix[y][x] = tem_decisao ? 'S' : 's';

            } else {

                m_matrix[y][x] = tem_decisao ? '1' : '0';
            }
    
            // realiza a travessia recursivamente para cada movimento válido
            if (mover.includes(LEFT) && traverse(x-1, y, decisoes)) {

                if (tem_decisao) {

                    decisoes.push(LEFT);
                }
                return true;
            }
            if (mover.includes(RIGHT) && traverse(x+1, y, decisoes)) {
                if (tem_decisao) {

                    decisoes.push(RIGHT);
                }
                return true;
            }
            if (mover.includes(UP) && traverse(x, y-1, decisoes)) {
                if (tem_decisao) {

                    decisoes.push(UP);
                }
                return true;
            }
            if (mover.includes(DOWN) && traverse(x, y+1, decisoes)) {
                if (tem_decisao) {

                    decisoes.push(DOWN);
                }
                return true;
            }
        }

        // se a travessia chegou a uma posição onde não é possível continuar, 
        // a função retorna falso (fracasso)
        return false;
    }
  
    // cria uma matriz bidimensional mutável a partir de uma matriz unidimensional de strings
    let m_matrix = matrix.map(row => row.split(''));
  
    // encontra o ponto de partida
    let start_x = -1;
    let start_y = -1;
    for (let y = 0; y < m_matrix.length; y++) {

      if (m_matrix[y].includes('M')) {
        start_x = m_matrix[y].indexOf('M');
        start_y = y;
        break;
      }
    }
  
    // executa a travessia da matriz
    let contar = 0;
    let escolhas = [];
    if (traverse(start_x, start_y, escolhas)) {

      contar = escolhas.length;
    }

    return contar == k ? "Impressed" : "Oops!";
  }
  









