let stringEntrada = ['8', 'GAAATAAA'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const gene = lerEntrada();

    const resultado = steadyGene(gene);

    console.log(resultado + '\n');
}

principal();

function steadyGene(gene) {

    let freq = {};
    let n =  gene.length;
    let resposta = n;
    let j = 0;
    
    for(let index = 0; index < n; index += 1) {
        
        if(!freq[gene[index]])
        
            freq[gene[index]] = 1;
            
        else 
        
            freq[gene[index]]++;
         
    }
    
    if(eh_ok(freq, n)) {
        
        return 0;
    }
    
    for(let index = 0; index < n; index += 1) {
        
        while(j < n && !eh_ok(freq, n)) 
        
            --freq[gene[j++]];
            
        if(eh_ok(freq, n))
        
            resposta = Math.min(resposta, j - index);
            ++freq[gene[index]];
    }
    
    return resposta;
}

function eh_ok(freq, n) {
    
    if(freq['A'] > n/4) return false;
    if(freq['C'] > n/4) return false;
    if(freq['T'] > n/4) return false;
    if(freq['G'] > n/4) return false;
    
    return true;
    
}