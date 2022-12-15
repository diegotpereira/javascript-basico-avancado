let stringEntrada = ['2','hereiamstackerrank', 'hackerworld'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    // const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const s = lerEntrada();
    const hr = lerEntrada();

    const resultado = hackerrankInString(q, s, hr);
    
    console.log(resultado);

    // for(let i = 0; i < q; i++) {

    //     const s = lerEntrada();
    //     const s2 = lerEntrada();

    //     const resultado = hackerrankInString(q, s, s2);
        
    //     console.log(resultado);
    // }
}

principal();

function hackerrankInString(q, s, hr) {

    // var hr = 'hackerrank';
    var out = ''; var idx = 0;

    while (q > 0) {
      out = '';
      idx = 0;
    //   s = readLine();     
      if (s.length < hr.length) {
        return 'NO';
        q--;
        continue;
      }
      for (var i = 0; i < s.length; i++) {
        idx = s.indexOf(hr[i], idx);
        if (idx < 0 ) break;
        out = out + s[idx];
        if (idx === s.length - 1) break;
        idx++;
      }
      out === hr ? 'YES' : 'NO';
      q--;

      return out;
    }
}