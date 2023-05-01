// /**
//  * Função para verificar se existe algum vértice vizinho não visitado para o vértice atual
//  * @param {} currentNode , nó (vértice) atual que está sendo processado
//  * @param {} graph , matriz de adjacência do grafo
//  * @param {*} visitedNodes , hashmap para os vértices que já foram visitados
//  * @returns
//  */
// const findUnVisitedNode = (currentNode, graph, visitedNodes) => {

//     // vértices conectados atuais para este vértice atual
//     const currentConnectedNodes = graph[currentNode]; 

//     // inicializando como -1, pois nenhum vértice foi visitado
//     let neighborIdx = -1; 

//     currentConnectedNodes.forEach((element, idx) => {
//       // encontrando o primeiro vértice vizinho não visitado
//       if (element == 1 && !visitedNodes[idx] && neighborIdx == -1) {

//         neighborIdx = idx;
//       }
//     });

//     return neighborIdx;

//   };



// /**
//  * Percorrendo o grafo
//  * @param {Array} graph , matriz de adjacência do grafo
//  * @param {Number} rootNode , nó raiz para começar
//  */

// const dfs = (graph, rootNode) => {

//     // armazenando a distância até o nó raiz
//     let nodeDistance = {};

//     // inicializando todas as distâncias como infinito
//     for (let i = 0; i < graph.length; i++) {

//       nodeDistance[i] = Infinity;

//     }
  
//     // distância do nó raiz para o próprio nó raiz é 0
//     nodeDistance[rootNode] = 0;
  
//     // criando uma pilha para acompanhar os nós a serem visitados mais tarde
//     let stack = [rootNode];
  
//     // definindo o vértice atual como visitado, já que não queremos criar um loop em torno dele
//     let visitedNodes = { [rootNode]: true };
  
//     // iterando enquanto tivermos vértices na pilha
//     while (stack.length) {

//       // pegando o valor atual na pilha que precisa ser processado
//       const currentNode = stack.pop();

//       // verificando se existem vértices não visitados ou não
//       const unvisitedNode = findUnVisitedNode(currentNode, graph, visitedNodes);

//       // verificando se existe algum vértice não visitado para este vértice atual ou não
//       if (unvisitedNode >= 0) {
      
//         if (!visitedNodes[unvisitedNode]) {
          
//           // valor não está definido até agora
//           if (nodeDistance[unvisitedNode] == Infinity)

//             nodeDistance[unvisitedNode] = nodeDistance[currentNode] + 1;

//           visitedNodes[unvisitedNode] = true;

//           // se um vértice não visitado existir, precisamos empurrar o vértice atual também
//           // como o próximo vértice que precisamos explorar
//           stack.push(...[currentNode, unvisitedNode]);
//         }
//       } else {

//         // se todos os vértices foram visitados, não precisamos adicionar nenhum valor na pilha
//         visitedNodes[unvisitedNode] = true;
//       }
//     }
  
//     return nodeDistance;
//   };



//   const newdfsGraph = [
//     [0, 1, 1, 0, 0],
//     [1, 0, 0, 1, 0],
//     [1, 0, 0, 1, 1],
//     [0, 1, 1, 0, 0],
//     [0, 0, 1, 0, 0],
//   ];
  
//   console.log(dfs(newdfsGraph, 1));

class Grafo {

    // Construtor da classe, recebe um número de vértices v
    constructor(v) {

        this.V = v
        this.adj = new Array(v);

        // Para cada vértice, cria um array para armazenar os vértices adjacentes
        for (let index = 0; index < v; index++) 
            
            this.adj[index] = [];
            
        
    }

    // Função para adicionar uma borda entre dois vértices v e w
    addBorda(v, w) {

        this.adj[v].push(w);
    }

    // Função utilitária para percorrer o grafo usando DFS (busca em profundidade)
    DFSUtil(v, visitado) {

        // Marca o vértice atual como visitado e imprime na tela
        visitado[v] = true;
        document.write(v + " ");

        // Percorre todos os vértices adjacentes ao vértice atual
        for (let index of this.adj[v].values()) {
            
            let n = index

            // Se o vértice adjacente ainda não foi visitado, chama a função recursivamente para ele
            if(!visitado[n])

                this.DFSUtil(n, visitado);
            
        }
    }

    // Função para percorrer o grafo usando DFS (busca em profundidade), começando pelo vértice v
    DFS(v) {

        // Inicializa um array de vértices visitados como falso para todos os vértices
        let visitado = new Array(this.V);

        for (let index = 0; index < this.V; index++)
            
            visitado[index] = false;
            
            // Chama a função utilitária para percorrer o grafo começando pelo vértice v
            this.DFSUtil(v, visitado);
        
    }
}

// Cria um novo grafo com 4 vértices
g = new Grafo(4);


// Adiciona as bordas entre os vértices
g.addBorda(0, 1);
g.addBorda(0, 2);
g.addBorda(1, 2);
g.addBorda(2, 0);
g.addBorda(2, 3);
g.addBorda(3, 3);

// Imprime na tela a mensagem indicando que a primeira travessia de profundidade vai começar
document.write("A seguir está a primeira travessia da profundidade (começando no vértice 2)<br>");

// Chama a função DFS para percorrer o grafo começando pelo vértice 2
g.DFS(2);