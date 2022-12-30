let stringEntrada = ['2','9, 6, 2015', '6, 6, 2015'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const multiplaEntrada = lerEntrada().replace(/\s+$/g, ''); 
    const n = parseInt(multiplaEntrada[0], 10); 
    const m = parseInt(multiplaEntrada[1], 10);
    const y = parseInt(multiplaEntrada[2], 10);
     
    let arr = []; 

    for(let i = 0; i < n; i++) { 

        const temaItem = lerEntrada().replace(/\s+$/g, '').replace(/,/g, "").split(' ');
        arr.push(temaItem); 
    }

    const resultado = calcularMulta(arr);

    console.log(resultado);
}

principal();

// function calcularMulta(arr) {

//     dia = arr[0][0] - arr[1][0];
//     mes = arr[0][1] - arr[1][1];
//     ano = arr[0][2] - arr[1][2];

//     if (ano < 0 || (ano === 0 && mes < 0) || (ano === 0 && mes === 0 && dia < 0)) 
    
//         return (0);
//     else if (ano > 0) 
    
//         return (10000);
//     else if (mes > 0) 
    
//         return (500 * mes);
//     else 
    
//         return (15 * dia);
// }

// function calcularMulta(arr) {

//     const stringRetornadaData = arr[0];
//     const stringDataVencimento = arr[1];
//     const dataRetornada = stringRetornadaData.map(n => parseInt(n));
//     const dataVencimento = stringDataVencimento.map(n => parseInt(n));

//     const diaDif = dataRetornada[0] - dataVencimento[0];
//     const mesDif = dataRetornada[1] - dataVencimento[1];
//     const anoDif = dataRetornada[2] - dataVencimento[2];

//     if (anoDif > 0) {
        
//         return (10000);

//     } else if (anoDif == 0  && mesDif > 0) {
        
//         return (mesDif * 500);

//     } else if (mesDif == 0 && diaDif > 0) {
        
//         return (diaDif * 15);

//     } else {

//         return;
//     }
// }

// function calcularMulta(arr) {

//     const data = arr;
//     const [atual, experado] = data.map(linha => {
        
//         const [dia, mes, ano] = linha.map(Number);
        
//         return {dia, mes, ano};
//     });
//     calculateFine(atual, experado);
// } 

// const calculateFine = (atual, experado) => {
    
//     if(atual.ano > experado.ano) {
        
        
//         return 10000;
//     }
    
//     if(atual.ano === experado.ano && atual.mes > experado.mes) {
        
//         return (atual.mes - experado.mes) * 500;
//     }
    
//     if(atual.ano === experado.ano && atual.mes === experado.mes && atual.dia > experado.dia) {
        
//         return (atual.dia - experado.dia) * 15;
//     }
    
//     return 0;
// }
