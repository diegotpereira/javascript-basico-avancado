let stringEntrada = ['6', 'riya, riya@gmail.com', 'julia, julia@julia.me', 'julia, sjulia@gmail.com', 'julia, julia@gmail.com', 'samantha, samantha@gmail.com', 'tanya, tanya@gmail.com'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const N = parseInt(lerEntrada().trim(), 10);
    var patern = new RegExp('@gmail.com');
    var nomes = [];

    for(let index = 0; index < N; index += 1) {

        const multiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const nome = multiplaEntrada[0];
        const emailID = multiplaEntrada[1];

        // verificaEmail(nome, emailID);

        // console.log(resultado);
        if(patern.test(emailID)) {
            
            nomes.push(nome);
        }


    }

    nomes.sort().forEach(function(nome) {
        
        console.log(nome);
    })
    
}

principal();

// function verificaEmail(nome, emailID) {

//     var patern = new RegExp('@gmail.com');
//     var nomes = [];

//     if (patern.test(emailID)) {
        
//         nomes.push(nome);
//     }
//     nomes.sort().forEach(function(nome) {

//         console.log(nome);
//     })
// }