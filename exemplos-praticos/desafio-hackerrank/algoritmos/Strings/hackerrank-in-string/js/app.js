let stringEntrada = ['2','hereiamstackerrank', 'hackerworld'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < q; i++) {

        const s = lerEntrada();

        const resultado = hackerrankInString(s);
        
        console.log(resultado);
    }
}

principal();

// function hackerrankInString(s) { // s = "hereiamstackerrank"
  
//   let entradaFixa = 'hackerrank'.split('') // entradaFixa = Array(10) 0: h, 1: a, 2: c, 3: k, 4: e, 5: r, 6: r, 7: a, 8: n, 9: k
//   let entrada = s.split(''); // entrada = (18) 
//                               // 0: h, 1: e, 2: r, 3: e, 4: i, 5: a, 6: m, 7: s, 8: t, 9: a, 10: c, 11: k, 12: e, 13: r, 14: r, 15: a, 16: n, 17: k, 
//                               // s = hereiamstackerrank
//   let j = 0;

//   if(entrada.length < entradaFixa.length) {

//     return 'NAO'
//   }

//   for(let i = 0; i < entrada.length; i++) {

//     if(entrada[i] === entradaFixa[j]) {

//       j++;
//     }
//   }

//   return j === entradaFixa.length ? 'SIM' : 'NAO';
// }


function hackerrankInString(s) {

  //  imprima YES em uma nova linha 
  // se a string contiver hackerrank, 
  // caso contrário, imprima NO.
  let entrada = "hackerrank";
  let index = 0;

  for(let i = 0; i < s.length; i++) {

    if(s.charAt(i) === entrada.charAt(index)) {

      index++;
    }

    if (index == entrada.length) {
      
      return "Sim";
    }
  }

  return "NAO"
}