import { Pool } from "C:\php\htdocs\javascript\javascript-basico-avancado-1\testes-automatizados\exemplo-com-jasmine\node_modules\pg";


// // const { Pool } = require('pg');

// console.log(Pool);

const pool = new Pool({

    user: 'postgres',
    host: 'localhost',
    database: 'projetos_java',
    password: '123',
    port: 5432
});



export { pool };

console.log("pg.js");