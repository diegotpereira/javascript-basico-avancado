// import { somar } from './app.js'

// describe("exemplo de teste", function() {

//     it("deve somar dois números corretamente", function() {

//         expect(somar(2, 3)).toBe(5);
//         expect(somar(0, 0)).toEqual(0);
//         expect(somar(-1, 1)).toEqual(0);
//     });
// });

// describe("somar()", function() {
//     it("deve retornar 3 quando passado 1 e 2", function() {
//       expect(somar(1, 2)).toEqual(3);
//     });
  
//     it("deve retornar -1 quando passado -2 e 1", function() {
//       expect(somar(-2, 1)).toEqual(-1);
//     });
//   });


// describe("Teste da função multiplicar", function() {

//     it("Deve retornar o resultado correto da multiplicação dos números", function() {

//         expect(multiplicar(2, 3)).toEqual(6);
//         expect(multiplicar(0, 0)).toEqual(0);
//         expect(multiplicar(-5, 10)).toEqual(-50);
//     });
// });

// describe('Usuario', function() {

//     beforeEach(function() {

//         usuario = new Usuario();
//         usuario.id = 1;
//         usuario.nome = 'João';
//         usuario.email = 'joao@teste.com'

//     });

//     // describe('cria', function() {

//     //     it('deve adicionar um novo usuário ao banco de dados', function(done) {

//     //         usuario.cria().then(function() {

//     //             expect(Usuario.lista()).toContain(jasmine.objectContaining(usuario));
//     //             done();
//     //         });
//     //     });
//     // });
    
//     // describe('atualiza', function() {

//     //     it('deve atualizar o usuário no banco de dados', function(done) {

//     //         usuario.atualiza({ nome: 'Maria'}).then(function() {

//     //             var usuarios = Usuario.lista();
//     //             var atualizaUsaurio = usuarios.find(u => u.id === usuario.id);
//     //             expect(atualizaUsaurio.nome).toEqual('Maria');
//     //             // expect(Usuario.usuarios).toContain(usuario);
//     //             expect(usuarios).toContain(jasmine.objectContaining(atualizaUsaurio));
//     //             done();
//     //         });
//     //     });
//     // });

//     // describe('deleta', function() {

//     //     it('deve remover o usuário do banco de dados', function(done) {

//     //         usuario.deleta().then(function() {

//     //             expect(Usuario.lista()).not.toContain(jasmine.objectContaining(usuario));
//     //             done();
//     //         });
//     //     });
//     // });
// })

// const Usuario = require('./Usuario.js');

// import Usuario from './Usuario.js';
// const Jasmine = require('jasmine');
const { describe, it, expect } = require('jasmine');

describe('Nome da Suíte de Teste', function() {
    it('Nome do Teste', function() {
      // Seu teste aqui
      console.log("teste");
    });
  });
  

// describe('Usuario', () => {

//     let usuario1;
//     let usuario2;

//     beforeEach(() => {

//         usuario1 = new Usuario(null, 'João', 'joao@teste.com');
//         usuario2 = new Usuario(null, 'Maria', 'maria@teste.com');
//     });

//     it('deve criar um novo usuário', async() => {

//         await usuario1.cria();
//     })

//     // afterEach(async() => {

//     //     const usuarios = await Usuario.lista();

//     //     usuarios.forEach(async(usuario) => {

//     //         await usuario.deleta();
//     //     })
//     // })
// })