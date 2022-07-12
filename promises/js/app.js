// function getUsuarios() {
//     return [
//         {
//             usuarioNome: 'Bob', email: 'bob@teste.com'
//         },
//         {
//             usuarioNome: 'Bunny', email: 'bunny@teste.com'
//         },
//         {
//             usuarioNome: 'Peter', email: 'peter@teste.com'
//         }
//     ]
// }
// function findUsuario(usuarioNome) {
//     const usuarios = getUsuarios()
//     const usuario = usuarios.find((usuario) => usuario.usuarioNome === usuarioNome)

//     return usuario
// }
// console.log(findUsuario('Bob'));

// simulando delay
// function getUsuarios() {
//     let usuarios = []

//     // delay de 1 segundo 1000ms
//     setTimeout(() => {
//         usuarios = [
//             {
//                 usuarioNome: 'Bob', email: 'bob@teste.com'
//             },
//             {
//                 usuarioNome: 'Bunny', email: 'bunny@teste.com'
//             },
//             {
//                 usuarioNome: 'Peter', email: 'peter@teste.com'
//             }
//         ]
//     }, 1000);

//     return usuarios
// }

// // saida
// undefined
// function getUsuarios(callback) {
//     setTimeout(() => {
//         callback([
//             {
//                 usuarioNome: 'Bob', email: 'bob@teste.com'
//             },
//             {
//                 usuarioNome: 'Bunny', email: 'bunny@teste.com'
//             },
//             {
//                 usuarioNome: 'Peter', email: 'peter@teste.com'
//             }
//         ])
//     }, 1000);
// }
// function findUsuario(usuarioNome, callback) {
//     getUsuarios((usuarios) => {
//         const usuario = usuarios.find((usuario) => usuario.usuarioNome === usuarioNome)
//         callback(usuario)
//     })
// }
// findUsuario('Bob', console.log)

// Usando Promise
function getUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    usuarioNome: 'Bob', email: 'bob@teste.com'
                },
                {
                    usuarioNome: 'Bunny', email: 'bunny@teste.com'
                },
                {
                    usuarioNome: 'Peter', email: 'peter@teste.com'
                }
            ])
        }, 1000);
    })
}
function emCumprido(usuarios) {
    console.log(usuarios);
}
const promise = getUsuarios()

promise.then(emCumprido)