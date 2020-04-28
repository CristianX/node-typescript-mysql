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
    // Obteniendo instancia (Patron Singleton)
    static get instance() {
        // this() es para llamar al constructor en caso de que no exista una instancia (para que no haya multiples instancias al llamar muchas veces el instance)
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('El registro solicitado no existe');
            }
            else {
                callback(null, results);
            }
        });
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
