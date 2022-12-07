// const n = 9;
// const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const n = 6;
const ar = [1, 1, 2, 3, 4, 5];


function comercianteMmeias () {

    if(!ar || ar.length !== n)
        return 0;

    let pares = 0;
    let objeto = {}

    for(let num of ar) {

        objeto[num] = objeto[num] + 1 || 1;
    }

    for(let num of ar) {

        objeto[num] = objeto[num] % 2 === 0;
        pares += objeto[num];
    }

    return pares;
}

// console.log(comercianteMmeias([9],[10, 20, 20, 10, 10, 30, 50, 10, 20]));
// console.log(comercianteMmeias([6][1, 1, 2, 3, 4, 4]));
console.log(comercianteMmeias());


// function teste(n, m) {

//     return n + m;
// }

// console.log(teste([4, 2], [1, 2]));
