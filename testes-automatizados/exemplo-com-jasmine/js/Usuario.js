// import pool  from "./pg.js";
// import { pg } from "C:\php\htdocs\javascript\javascript-basico-avancado-1\testes-automatizados\exemplo-com-jasmine\node_modules\pg";

const pg = require('pg');

const pool = new pg.Pool({

    user: 'postgres',
    host: 'localhost',
    database: 'projetos_java',
    password: '123',
    port: 5432
});


class Usuario {

    constructor(id, nome, email) {

        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    async cria() {

        const consulta = {

            text: 'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING id',
            values: [this.nome, this.email]
        };
        
        const resultado = await pool.query(consulta);
        this.id = resultado.rows[0].id;

        return this;
    }

    // static async insert(usuario) {
    //     const pool = new pg.Pool({
    //       user: 'postgres',
    //       host: 'localhost',
    //       database: 'projetos_java',
    //       password: '123',
    //       port: 5432,
    //     });
    
    //     const client = await pool.connect();
    //     try {
    //       const query = `INSERT INTO usuarios (nome, email) VALUES ($1, $2)`;
    //       const values = [usuario.nome, usuario.email];
    //       await client.query(query, values);
    //     } finally {
    //       client.release();
    //     }

    // }

    
    // static get usuarios() {

    //     return JSON.parse(localStorage.getItem('usuarios')) || [];
    // }

    // static set usuarios (usuarios) {

    //     localStorage.setItem('usuarios', JSON.stringify(usuarios));
    // }

    // static lista() {
    //     let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    //     return usuarios;
    // }

    

    // cria() {

    //     let usuarios = Usuario.usuarios;
    //     usuarios.push(this);
    //     Usuario.usuarios = usuarios;

    //     return Promise.resolve(this);
    // }

    // atualiza(props) {

    //     Object.assign(this, props);

    //     let usuarios = Usuario.usuarios;
    //     let indice = usuarios.findIndex(usuario => usuario.id === this.id);

    //     if (indice !== -1) {
            
    //         usuarios[indice] = this;
    //         Usuario.usuarios = usuarios;
    //     }

    //     return Promise.resolve(this);
    // }

    // deleta() {

    //     let usuarios = Usuario.usuarios;
    //     let indice = usuarios.findIndex(usuario => usuario.id === this.id);

    //     if (indice != -1) {
            
    //         usuarios.splice(indice, 1);
    //         Usuario.usuarios = usuarios;
    //     }

    //     return Promise.resolve(this);
    // }
}

// const novoUsuario = new Usuario('João', 'joao@example.com', 'senha123');
// Usuario.insert(novoUsuario);

module.exports = Usuario
// export default Usuario;