let stringEntrada = ['5', '47'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const h = parseInt(lerEntrada().trim(), 10);
    const m = parseInt(lerEntrada().trim(), 10);

    const resultado = timeInWords(h, m);

    console.log(resultado);
}

principal();

function timeInWords(h, m) {

    let words = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eightteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine"
    ];

    let str = 
        !m ? `${words[h]} o' clock ` : 
             `${!(m % 30) ? 'half' : !(m % 15) ? 'quarter' : 
             `${m <= 30 ? words[m] : words[60 - m]} ${`minute${m > 1 ? 's' : ''}`}`} ${m <= 30 ? 'past' : 'to'} ${words[m <= 30 ? h : h + 1]}`

    return str;
}