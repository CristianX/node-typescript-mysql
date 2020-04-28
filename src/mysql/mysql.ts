// Implementado con patron Singleton

// MySQL
import mysql = require('mysql');

export default class MySQL {

    // Singleton para que no se ejecuten múltiples instancias ni queden conexiones abiertas
    private static _instance: MySQL;

    // Conexión
    cnn: mysql.Connection;
    conectado: boolean = false; // Opcional

    constructor() {
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
    public static get instance() {
        // this() es para llamar al constructor en caso de que no exista una instancia (para que no haya multiples instancias al llamar muchas veces el instance)
        return this._instance || ( this._instance = new this() )
    }


    // Manejo de errores
    private conectarDB() {
        this.cnn.connect(( err: mysql.MysqlError ) => {

            if(err) {
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log('Base de datos online!');

        })
    }


}