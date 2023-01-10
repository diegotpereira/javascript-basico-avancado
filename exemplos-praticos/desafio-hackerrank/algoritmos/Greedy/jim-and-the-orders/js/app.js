let stringEntrada = ['3', '1, 3', '2, 3', '3, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    let pedidos = Array(n);

    for(let index = 0; index < n; index += 1) {

        pedidos[index] = lerEntrada().replace(/\s+$/g, '').split(' ').map(pedidoTemp => parseInt(pedidoTemp, 10));
    }

    const resultado = jimOrders(pedidos);

    console.log(resultado.join(' ') + '\n');
}

principal();


// function jimOrders(pedidos) {

//     let entrega = [];

//     for(let index = 0; index < pedidos.length; index += 1) {

//         entrega.push([pedidos[index][0] + pedidos[index][1], index + 1]);
//     }

//     entrega.sort((a, b) => a[0] - b[0]);

//     return entrega.map((valor) => valor[1]);
// }

// function jimOrders(pedidos) {

//     const somaTempos = pedidos.map((e) => e[0] + e[1]);
//     const clientes = somaTempos.map((e, i) => ({[i + 1] : e}));

//     clientes.sort((a, b) => Object.values(a)[0] - Object.values(b)[0]);

//     return clientes.map((e) => Object.keys(e)[0]);

// }


// function jimOrders(pedidos) {

//     let arr = [];

//     for(let index = 0; index < pedidos.length; index += 1) {

//         let totalPedidos = pedidos[index][0] + pedidos[index][1];
//         arr.push([totalPedidos, index + 1]); 
//     }

//     for(let index = 0; index < arr.length - 1; index += 1) {

//         for(let compare = 0; compare < arr.length - index - 1; compare += 1) {

//             if(arr[compare][0] > arr[compare + 1][0]) {

//                 [[arr[compare], arr[compare + 1]]] = [[arr[compare + 1], arr[compare]]];
//             }
//         }
//     }

//     for(let a = 0; a < arr.length; a += 1) {

//         arr[a] = arr[a][1];
//     }

//     return arr;
// }

function jimOrders(pedidos) {

    return pedidos.map((dado, indice) => {

        let soma = dado.reduce((a, b) => a + b);

        return [indice + 1, soma];
    }).sort((a, b) => a[1]- b[1]).map((dado) => dado[0]);
}