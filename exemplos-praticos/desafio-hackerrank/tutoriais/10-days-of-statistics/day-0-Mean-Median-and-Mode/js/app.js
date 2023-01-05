let stringEntrada = ['10', '64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];

}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    minimumAbsoluteDifference(arr);

    // const resultado = minimumAbsoluteDifference(arr);

    // console.log(resultado + '\n');
}

principal();



function minimumAbsoluteDifference(arr) {
    
    // elementos da matriz classificados
    arr.sort(function(a, b) {

        return a - b
    });
    var f = [];
    var r = arr.reduce(function(r, i){ // {totalElementos: 439006, len: 10}
        r.totalElementos = r.totalElementos + i;
        var d = f.find(function(o) {
            return o.val == i
        });
        if(d == null) {
            d = {
                val: i, 
                freq: 1
            };
            f.push(d);
        } else {
            d.freq++;
        }
        return r;
    }, 
    
    {totalElementos:0, len:arr.length});
    
    f.sort(function(a, b){  // f = 0:{val: 4978, freq: 1}
                                // 1:{val: 11735, freq: 1}
                                // 2:{val: 14216, freq: 1}
                                // 3:{val: 14470, freq: 1}
                                // 4:{val: 38120, freq: 1}
                                // 5:{val: 51135, freq: 1}
                                // 6:{val: 64630, freq: 1}
                                // 7:{val: 67060, freq: 1}
                                // 8:{val: 73429, freq: 1}
                                // 9:{val: 99233, freq: 1}
        if(a.freq == b.freq) {
            return a.val - b.val;
        }
        return b.freq - a.freq;
    });

    // media
    console.log(r.totalElementos/r.len); // r = {totalElementos: 439006, len: 10}

    // valor mediano
    console.log((arr[r.len/2] + arr[(r.len/2) - 1])/2); // arr =(10) [4978, 11735, 14216, 14470, 38120, 51135, 64630, 67060, 73429, 99233]

    // número de ocorrências de todos os elementos no array
    console.log(f[0].val);  // f = 0:{val: 4978, freq: 1}
                                // 1:{val: 11735, freq: 1}
                                // 2:{val: 14216, freq: 1}
                                // 3:{val: 14470, freq: 1}
                                // 4:{val: 38120, freq: 1}
                                // 5:{val: 51135, freq: 1}
                                // 6:{val: 64630, freq: 1}
                                // 7:{val: 67060, freq: 1}
                                // 8:{val: 73429, freq: 1}
                                // 9:{val: 99233, freq: 1}
}

