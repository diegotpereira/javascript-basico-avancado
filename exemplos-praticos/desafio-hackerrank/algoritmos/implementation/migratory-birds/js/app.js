
function migracaoPassaros(arr) {

    let maior = 1;
    let contar = maior;
    let tipo = 0;

    arr.sort();

    // console.log(arr);

    for(let i = 0; i < arr.length; i++) {

        // Escolha o menor dos dois tipos vistos duas vezes
        maior = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;

        // Se mais de 1 tipo foi detectado nessa quantidade máxima
        if(maior > contar) {

            contar = maior;

            // retorne o menor de seus ids
            tipo = arr[i];
        }
    }

    return tipo;    
}

console.log(migracaoPassaros([1, 4, 4, 4, 5, 3])); // saida: 4