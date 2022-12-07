
var custoItem = [3, 10, 2, 9];
var naoComeu = [4, 1];
var valorPagoAna = 12

function bomApetite() {

    let resultado = '';

   custoItem.slice(naoComeu, 1)

    // 3 + 10 + 9 + 2 = 24 / 2 = 12
    const contaAhPagar = custoItem.reduce((anterior, proximo) => anterior + proximo, 0) / 2;

    if (contaAhPagar == valorPagoAna) {
        
        resultado = 'bom apetite'

    } else {

        resultado = valorPagoAna - contaAhPagar;
    }

    console.log(resultado); // saída: bom apetite


}

bomApetite()