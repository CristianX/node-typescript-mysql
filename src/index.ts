// Importando server
import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

// Iniciando app
const server = Server.init( 3000 );

// Llamando configuración de rutas
server.app.use( router );

// Ejecutando conexión mysql desde mysql.ts
// MySQL.instance;

server.start( () => {
    console.log('Servidor corriendo en el puerto 3000');
} );




