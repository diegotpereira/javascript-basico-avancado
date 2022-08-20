const quadradoPalavraValido = (palavras) => {

    if (palavras == null || palavras.length === 0) {
        
        return false
    }

    if (palavras.length !== palavras.length) {
        
        return false
    }

    for(let i = 0; i < palavras.length; i++) {

        for(let j = 0; j < palavras.length; j++ ) {

            if (palavras[i][j] != palavras[j][i]) {
                
                return false
            }
        }
    }

    return true
}

let arr = [
    ["b","a","l","l"],
    ["a","r","e","a"],
    ["r","e","a","d"],
    ["l","a","d","y"]
  ];
  
  let arr1 = [
    ["a","b","c","d"],
    ["b","n","r","t"],
    ["c","r","m","y"],
    ["d","t","y","e"]
  ];

  console.log(quadradoPalavraValido(arr));
  console.log(quadradoPalavraValido(arr1));