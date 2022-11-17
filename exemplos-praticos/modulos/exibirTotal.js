import { capitalizar, arredondarCasasDecimais } from "./main.js";

function exibirTotal(nome, total) {

    return console.log(`${capitalizar(nome)}, seu custo total é: ${arredondarCasasDecimais(total)}`);
}


exibirTotal('bob marley', 20.4444);

export { exibirTotal }