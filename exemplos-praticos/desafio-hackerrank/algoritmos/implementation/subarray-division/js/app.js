// const s = 5;
// const d = [1, 2, 1, 3, 2];
// const m = [3, 2];

// números nos quadrados de chocolate
const s = [ 1, 2, 1, 3, 2 ];

// dia de nascimento
const d = 3;

// mes de nascimento
const m = 2;

function aniversario(s, d, m) {

    let n = s;
    let nums = [];
    let contar = 0;

    const add = (arr) => arr.reduce((a, b) => a + b, 0);

    for(let i = 0; i < s.length; i++) {

        let arrayElemento = n.slice(0 + i, m + i);

        nums.push(arrayElemento);
    }

    if(n.length === 1 && n[0] === d) {

        contar++;

    } else {

        nums.forEach((elemento) => {

            if(add(elemento) === d) {

                contar++;
            }
        });
    }

    
    return contar;
}

// console.log(aniversario([5], [1, 2, 1, 3, 2], [3, 2]));
// console.log(aniversario(s, d, m));

const resultado = aniversario(s, d, m);

console.log(resultado); // saída: 2