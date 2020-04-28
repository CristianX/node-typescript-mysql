"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importando server
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
// Iniciando app
const server = server_1.default.init(3000);
// Llamando configuración de rutas
server.app.use(router_1.default);
// Ejecutando conexión mysql desde mysql.ts
// MySQL.instance;
server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
});
