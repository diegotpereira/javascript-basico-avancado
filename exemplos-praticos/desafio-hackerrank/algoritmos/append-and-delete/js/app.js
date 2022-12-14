let stringEntrada = ['hackerhappy', 'hackerrank', '9'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const s = lerEntrada();
    const t = lerEntrada();
    const k = parseInt(lerEntrada().trim(), 10);

    const resultado = anexarEExcluir(s, t, k);

    console.log(resultado); // Sim
}

principal();

function anexarEExcluir(s, t, k) {

    const s_len = s.length; // s_len = 11 s = "hackerhappy"
    const t_len = t.length; // t_len = 10 t = "hackerrank"
    let len = Math.min(s_len, t_len); // len = 10, s_len = 11
    let paraRemover = 0;
    let paraAdd = 0;
    let coincidindo = 0;
    let str = '';

    for(let i = 0; i < len; i++) { // len = 10

        if(s[i] !== t[i]) { // s = "hackerhappy", t = "hackerrank"

            coincidindo = i; // coincidindo = 6
            break;

        } else if(i === len - 1) { // len = 10

            coincidindo = len; // coincidindo = 6, len = 10
        }
    }
    paraRemover = s_len - coincidindo; // paraRemover = 5, s_len = 11, coincidindo = 6
    paraAdd = t_len - coincidindo; // paraAdd = 4, t_len = 10

    if(s_len >= t_len && (paraAdd + paraRemover <= k)) { // s_len = 11, t_len = 10, paraAdd = 4, paraRemover = 5, k = 9

        str = "Sim"; // Sim

    } else if(s_len < t_len && ((k - (paraAdd + paraRemover)) % 2 === 0)) {

        str = "Sim";

    } else {

        str = "Não"
    }

    return str; // Sim
}