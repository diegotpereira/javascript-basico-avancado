// // Solução 1

// const s = 7;
// const t = 10;
// const a = 4;
// const b = 12;
// const macas = [2, 3, -4];
// const laranjas = [3, -2, -4];

// function contarMacasEhLaranjas(s, t, a, b, macas, laranjas) {

//     let contarMaca = 0;
//     let contarLaranja = 0;

//     for(let i = 0; i < macas.length; i++) {

//         if(a + macas[i] >= s && a + macas[i] <= t) {

//             contarMaca++;
//         }
//     }

//     for(let j = 0; j < laranjas.length; j++) {

//         if(b + laranjas[j] <= t && b + laranjas[j] >= s) {

//             contarLaranja++;
//         }
//     }

//     console.log(contarMaca); // 1
//     console.log(contarLaranja); // 2  "verificar"
// }

// contarMacasEhLaranjas(s, t, a, b, macas, laranjas); 


// // Solução 2

// const s = 7;
// const t = 10;
// const a = 4;
// const b = 12;
// const macas = [2, 3, -4];
// const laranjas = [2, -2, -4];

// function contarMacasEhLaranjas(s, t, a, b, macas, laranjas) {

//     let maca = macas.filter(valor => valor + a >= s && valor + a <= t).length;
//     let laranja = laranjas.filter(valor => valor + b >= s && valor + b <= t).length;

//     console.log(maca);
//     console.log(laranja);
// }


// contarMacasEhLaranjas(s, t, a, b, macas, laranjas);

// // Solução 3

// const s = 7;
// const t = 10;
// const a = 4;
// const b = 12;
// const macas = [2, 3, -4];
// const laranjas = [2, -2, -4];

// function contarMacasEhLaranjas(s, t, a, b, macas, laranjas) {

//     console.log(macas.reduce((soma, d) => soma + (s - a <= d && d <= t - a), 0)); // saída: 1
//     console.log(laranjas.reduce((soma, d) => soma + (s - b <= d && d <= t - b), 0)); // saída: 2
// }

// contarMacasEhLaranjas(s, t, a, b, macas, laranjas);
