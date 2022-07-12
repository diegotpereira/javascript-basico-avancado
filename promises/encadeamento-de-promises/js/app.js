let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 3 * 100);
})
p.then((resultado) => {
    console.log(resultado);

    return resultado * 2

}).then((resultado) => {
    console.log(resultado);

    return resultado * 3
}).then((resultado) => {
    console.log(resultado);

    return resultado * 4
})

function gerarNumero(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num)
        }, 3 * 1000);
    })
}

gerarNumero(10)
.then((resultado) => {
    console.log(resultado);

    return gerarNumero(resultado * 2)
})
.then((resultado) => {
    console.log(resultado);

    return gerarNumero(resultado * 3)
})
.then((resultado) => console.log(resultado))

//
function getUsuario(usuarioId) {
    return new Promise((resolve, reject) => {
        console.log('Obtenha o usuário do banco de dados.');
        setTimeout(() => {
            resolve({
                usuarioId: usuarioId,
                usuarioNome: 'admin'
            })
        }, 1000);
    })
}
function getServicos(usuario) {
    return new Promise((resolve, reject) => {
        console.log(`Adquira os serviços de ${usuario.usuarioNome} da API.`);

        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN'])
        }, 3 * 1000);
    })
}
function getCustoServico(servicos) {
    return new Promise((resolve, reject) => {
        console.log(`Calcule o custo do serviço de ${servicos}`);

        setTimeout(() => {
            resolve(servicos.length * 100)
        }, 2 * 1000);
    })
}

getUsuario(100)
.then(getServicos)
.then(getCustoServico)
.then(console.log)