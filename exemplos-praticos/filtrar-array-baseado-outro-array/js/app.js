let itens = [
    {
        cor: 'vermelha', tipo: 'tv', idade: 18
    },
    {
        cor: 'prata', tipo: 'telefone', idade: 18
    },
    {
        cor: 'azul', tipo: 'telefone', idade: 20
    },
    {
        cor: 'branco', tipo: 'videogame', idade: 2
    }
]

console.log(itens);

let exclusos = [
    {
        k: 'cor', v: 'prata'
    },
    {
        k: 'tipo', v: 'tv'
    }
]

let novosItens = itens.reduce((acc, item) => {

    let resultado = exclusos.some(excluso => item[excluso['k']] === excluso['v'])

    if (!resultado) {
        
        acc.push(item)
    }

    
    return acc
}, [])


console.log(novosItens);