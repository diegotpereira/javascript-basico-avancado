let stringEntrada = ['5, 3', '0, 1', '2, 3', '0, 4'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraMultiplaEntrada[0], 10);
    const p = parseInt(primeiraMultiplaEntrada[1], 10);

    let astronauta = Array(p);

    for (let index = 0; index < p; index += 1) {
        
        astronauta[index] = lerEntrada().replace(/\s+$/g, '')
                                        .split(' ')
                                        .map(astronautaTemp => parseInt(astronautaTemp, 10));
        
    }

    const resultado = journeyToMoon(n, astronauta);

    console.log(resultado + '\n');
}

principal();

// function journeyToMoon(n, astronauta) {

//     let mapa = criarNodeMapa(n, astronauta);
//     let floresta = [];
//     let visitou = {};
//     let contar = 0;

//     for (let index = 0; index < n; index += 1) visitou[index] = false;

//     for (let index = 0; index < n; index += 1) {
        
//         if (!visitou[index]) {
            
//             floresta.push(dfs(index, mapa, visitou).length);
//         }
//     }

//     for (let index = 0; index < floresta.length; index++) {
        
//         for (let compare = index + 1; compare < floresta.length; compare += 1) {
            
//             contar += floresta[index] * floresta[compare];
            
//         }
//     }

//     return contar;
// }

// function dfs(root, nodeMapa, visitou, tree = []) {

//     visitou[root] = true;

//     if(tree.includes(root)) return tree;

//     tree.push(root);

//     let conectarNodes = nodeMapa[root];

//     for (let index = 0; index < conectarNodes.length; index += 1) {
        
//         let conectarNode = conectarNodes[index];

//         if (!visitou[conectarNode]) {
            
//             dfs(conectarNode, nodeMapa, visitou, tree);
//         }
//     }

//     return tree;
// } 

// function criarNodeMapa(n, arestas) {

//     let mapa = {};

//     for (let index = 0; index < n; index += 1) mapa[index] = [];

//     for (let index = 0; index < arestas.length; index += 1) {
        
//         const [a, b] = arestas[index]

//         if (!mapa[b].includes[a]) {
            
//             mapa[b].push(a);
//         }
        

//         if (!mapa[a].includes[b]) {
            
//             mapa[a].push(b);
//         }
//     }
    
//     return mapa;
// }


function journeyToMoon(n, astronaut) {
    const map = adjacencyList(astronaut);
    const countries = [];
    let pairs = 0;

    for (const val of map.values()) {
        if (val.added) continue;
        countries.push(dfs(val, map));
    }

    let remaining = n - map.size;
    while (countries.length) {
        const country = countries.shift();
        countries.forEach(c => pairs += country * c);
        pairs += country * remaining;
    }

    while (remaining) pairs += --remaining;
    return pairs;
}

// Depth-First Search
function dfs(val, map, num = 0) {
    if (val.added) return num;
    val.added = true;
    val.astros.forEach(a => num += dfs(map.get(a), map));
    return num + 1;
}

// Create Adjacency List
function adjacencyList(astronauts) {
    const map = new Map();
    astronauts.forEach(a => {
        if (map.has(a[0])) map.get(a[0]).astros.push(a[1]);
        else map.set(a[0], {astros: [a[1]], added: false});
        if (map.has(a[1])) map.get(a[1]).astros.push(a[0]);
        else map.set(a[1], {astros: [a[0]], added: false});
    });
    return map;
}