
// var ano = 2017;  

function diaDoProgramador(ano) {

    if (ano == 1918) 
       return "26.09.1918";

    else if(((ano <= 1917) && // true
             (ano % 4 == 0)) || // false
            ((ano % 400 == 0) || // false
            ((ano % 4 == 0) & // false
            (ano  % 100 != 0)))) // true

            return " 12.09." + ano;

    else 
        return "13.09." + ano;
}

console.log(diaDoProgramador(2017));