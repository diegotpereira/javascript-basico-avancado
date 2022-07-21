// programa para verificar se um número é um valor flutuante ou inteiro
function verificarNumero(x) {
    
    // verifica se o valor passado é um número
    if (typeof x == 'number' && !isNaN(x)) {
        
        //verifica se é inteiro
        if (Number.isInteger(x)) {
            console.log(`${x} é inteiro.`);
        } else {
            console.log(`${x} é um valor float`);
        }
    } else {
        console.log(`${x} não é um número`);
    }
}
verificarNumero('ola')
verificarNumero(44)
verificarNumero(3.4)
verificarNumero(-3.4)
verificarNumero(NaN)