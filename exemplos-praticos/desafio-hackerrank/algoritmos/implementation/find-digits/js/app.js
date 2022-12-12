

let entradaString = ['2', '12', '1012'];
let entradaAtual = 0;

function lerEntrada() {

    return entradaString[entradaAtual++];

}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < t; i++) {

        const n = parseInt(lerEntrada().trim(), 10);

        const resultado = obterDigitos(n);

        console.log(resultado);
    }
}

principal();

function obterDigitos(n) {

    let contar = 0;
    let num = "";

    num = n.toString();

    for(let i = 0; i < num.length; i++) {

        if(num[i] != 0 && n % num[i] === 0) {
            console.log(num[i] != 0 && n % num[i] === 0);

            contar += 1;
        }
    }

    return contar;
}


// function obterDigitos(n) {

//         let contar = 0;
    
//         let num = "";
        
//         num = n.toString();
        
//         for(let i = 0; i < num.length; i++) {
            
//             if(num[i] != 0 && n % num[i] === 0) {
                
//                 contar += 1;
//             }
//         }
        
//         return contar;
        
        
//         for(let i = 0; i < n.length; i++) {
            
//             if(n[i] / n[i]) {
                
//                 contar = [i]
//             }
//         }
        
//         return contar;
// }