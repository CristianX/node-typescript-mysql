"use strict";
// Implementado con patron Singleton
Object.defineProperty(exports, "__esModule", { value: true });
// MySQL
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false; // Opcional
        console.log('Clase inicializada');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_db'
        });
        this.conectarDB();
    }
    // Manejo de errores
    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online!');
        });
    }
}
exports.default = MySQL;