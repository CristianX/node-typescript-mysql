// Importando server
import Server from './server/server';
import router from './router/router';

// Iniciando app
const server = Server.init( 3000 );

// Llamando configuración de rutas
server.app.use( router );

server.start( () => {
    console.log('Servidor corriendo en el puerto 3000');
} );




