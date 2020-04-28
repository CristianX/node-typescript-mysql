"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// default es por si alguien importa este archivo, esa clase se importara por defecto
class Server {
    constructor(port) {
        this.port = port;
        // Inicializando la aplicación de express
        this.app = express();
    }
    // Estatico es para que sea el metodo que se llame, para que dispare el constructor y se inice todo
    static init(port) {
        return new Server(port);
    }
    // Escuchando
    start(callback) {
        this.app.listen(this.port, callback());
    }
}
exports.default = Server;
