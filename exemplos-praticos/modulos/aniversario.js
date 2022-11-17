// import minhaDataHora from './dados.js';


// function data(dataAtual) {

//     const datahj = minhaDataHora(dataAtual.minhaDataHora);

//     console.log(datahj);
// }

// data()

// console.log(minhaDataHora);
// var dataAtual;

// console.log(dataAtual.minhaDataHora);  

export function myDateTime () {
    
    var dataAtual = new Date();
    var dia = dataAtual.getDate()

    console.log("Hoje: " + dia);
 }