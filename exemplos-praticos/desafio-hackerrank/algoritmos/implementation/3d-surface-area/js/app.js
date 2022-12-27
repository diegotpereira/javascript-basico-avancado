let stringEntrada = ['1, 1', '1'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}


function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const h = parseInt(primeiraMultiplaEntrada[0], 10);
    const w = parseInt(primeiraMultiplaEntrada[1], 10);

    let a = Array(h);


    for(let index = 0; index < h; index += 1) {

        a[index] = lerEntrada().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    const resultado = surfaceArea(a);

    console.log(resultado); // saída: 6
}

principal();

// function surfaceArea(a) {

//     const x = a.length; // x = 1, a = [array(1)]
//     const y = a[0].length; // y = 1
//     let contar = 0;

//     const contador = (indice, compare) => {

//         const c1 = a[indice - 1] && a[indice - 1][compare] || 0;
//         const c2 = a[indice + 1] && a[indice + 1][compare] || 0;
//         const c3 = a[indice][compare - 1] || 0;
//         const c4 = a[indice][compare + 1] || 0;

//         return [c1, c2, c3, c4].reduce((acumulador, valor) => acumulador + Math.max(0, a[indice][compare] - valor), 0); // a = [array(1)]
//     }
//     for(let index = 0; index < x; index += 1) // x = 1

//         for(let compare = 0; compare < y; compare += 1) // y = 1

//             contar += contador(index, compare) + 2; // contar = 6, contador = (indice, compare)

//     return contar;
    
// }

function surfaceArea(a) {

    let area = 0;

    for(let index = 0; index < a.length; index += 1) {

        area += a[index].length * 2;

        for(let compare = 0; compare < a[index].length; compare += 1) {

            if(index === 0) 

                area += a[index][compare];

            else if(a[index][compare] > a[index - 1][compare]) 

                area += (a[index][compare] - a[index - 1][compare]);

            // lado esquerdo
            if(compare === 0) 
              
                area += a[index][compare];

            else
              
                area += Math.abs(a[index][compare - 1] - a[index][compare]);

            // lado direito
            if(compare === a[index].length - 1)

                area += a[index][compare];

            // lado de tras
            if(index === a.length - 1)

                area += a[index][compare];

            else if(a[index][compare] > a[index + 1][compare])

                area += (a[index][compare] - a[index + 1][compare]);
        }
    }

    return area;
}