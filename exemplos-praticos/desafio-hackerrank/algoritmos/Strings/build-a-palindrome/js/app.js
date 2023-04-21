let stringEntrada = ["3", "costas, costas", "abc, def", "jdfh, fds"];

let entradaAtual = 0;

function  lerEntrada() {

    return stringEntrada[entradaAtual++];
}


function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let tItr = 0; tItr < t; tItr += 1) {

        const a = lerEntrada();

        const b = lerEntrada();

        const resultado = buildPalindrome(a, b);

        console.log(resultado + '\n');
    }
}

principal();

function buildPalindrome(a, b) {

    let substringsA = [];
    let substringsB = [];

    let maxSubstring = "";

    // Encontra todas as substrings não vazias de 'a'
    for (let i = 0; i < a.length; i++) {
        
        for (let j = i + 1; j <= a.length; j++) {
            
            substringsA.push(a.slice(i, j));
            
        }
    }

    // Encontra todas as substrings não vazias de 'b'
    for (let i = 0; i < b.length; i++) {
        
        for (let j = i + 1; j <= b.length; j++) {
            
            substringsB.push(b.slice(i, j));
            
        }
    }
    
    return [substringsA[0], substringsA[1], substringsB[0], substringsB[1]];
}

// let a = 'hello'
// let b = 'world'
// let [sa1, sa2, sb1, sb2] = buildPalindrome(a, b)
// console.log(sa1, sa2, sb1, sb2) // 'h' 'he' 'w' 'wo'