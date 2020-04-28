
import express = require('express');

// Importando path, no hay que hacer inatalación por que ya viene definido en typescript
import path = require('path');

// default es por si alguien importa este archivo, esa clase se importara por defecto
export default class Server {

    public app: express.Application;
    
    // Puerto
    public port: number;

    constructor( port: number ) {
        this.port = port;

        // Inicializando la aplicación de express
        this.app = express();
    }

    // Estatico es para que sea el metodo que se llame, para que dispare el constructor y se inice todo
    static init ( port: number ) {
        return new Server( port );
    }

    // Definiendo el path publico
    private publicFolder() {

        const publicPath = path.resolve(__dirname, '../public');

        this.app.use( express.static( publicPath ) );

    }

    // Escuchando
    start( callback: Function ) {
        this.app.listen( this.port, callback() );
        
        // Llamando path publico
        this.publicFolder();
    }

}
