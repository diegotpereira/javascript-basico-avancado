// programa para formatar a data
//pega a data atual
let atualData = new Date()

//obter o dia a partir da data
let dia = atualData.getDate()

// obter o mês a partir da data
// + 1 porque o mês começa em 0
let mes = atualData.getMonth() + 1

// obter o ano a partir da data
let ano = atualData.getFullYear()

// se o dia for menor que 10, adicione 0 para tornar o formato consistente
if (dia < 10) {
    dia = '0' + dia 
}

// se o mês for menor que 10, adiciona 0
if (mes < 10) {
    mes = '0' + mes 
}

// exibe em vários formatos
const formatarData1 = dia + '/' + mes + '/' + ano 
console.log(formatarData1);

const formatarData2 = dia + '-' + mes + '-' + ano 
console.log(formatarData2);
