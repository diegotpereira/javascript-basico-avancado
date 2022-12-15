let stringEntrada = ['11', 'middle-Outz', '2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10); // 11
    const s = lerEntrada(); // middle-Outz
    const k = parseInt(lerEntrada().trim(), 10); // 2

    const resultado = caesarCipher(s, k);

    console.log(resultado); // saída: okffng-Qwvb
}

principal();

function caesarCipher(s, k) {

    const inferiorA = 'abcdefghijklmnopqrstuvwxyz';
    const superiorA = inferiorA.toUpperCase(); // superiorA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const resposta = s.split("").map(resTemp => { // resposta = Array(11), s = "middle-Outz"

        if(inferiorA.includes(resTemp)) { // inferiorA = "abcdefghijklmnopqrstuvwxyz"

            return inferiorA[(inferiorA.indexOf(resTemp) + k) % 26]; // inferiorA = "abcdefghijklmnopqrstuvwxyz", k = 2

        } else if(superiorA.includes(resTemp)) { // superiorA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

            return superiorA[(superiorA.indexOf(resTemp) + k) % 26]; // superiorA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", k = 2

        } else {

            return resTemp;
        }
    });

    return resposta.join("");
}