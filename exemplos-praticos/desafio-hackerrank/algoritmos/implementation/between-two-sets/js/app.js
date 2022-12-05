
function obterTotalX(a, b) {

    let potencial = [];
    let final = [];

    for(let i = a[a.length - 1]; i <= b[0]; i++) {

        if(a.every(x => i % x === 0))
           potencial.push(i);
    }

    for(let j = 0, len = potencial.length; j < len; j++) {

        if(b.every(x => x % potencial[j] === 0))
           final.push(potencial[j]);
    }

    return final.length;
}

console.log(obterTotalX([2, 4], [16, 32, 96])); // saída: 3