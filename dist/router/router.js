"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const query = ` SELECT * FROM heroes `;
    // Ejecutando query de la clase mysql.ts
    mysql_1.default.ejecutarQuery(query, (err, heroes) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroes
            });
        }
    });
    // res.json({
    //     ok: true,
    //     mensaje: 'Todo esta bien!'
    // });
});
router.get('/heroes/:id', (req, res) => {
    // Llamando id de los parámetros de url
    const id = req.params.id;
    // Validando id para evitar inyección
    const escapeID = mysql_1.default.instance.cnn.escape(id);
    const query = ` SELECT * FROM heroes WHERE id = ${escapeID} `;
    // Ejecutando query de la clase mysql.ts
    mysql_1.default.ejecutarQuery(query, (err, heroe) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroe: heroe[0]
            });
        }
    });
});
// Exportando router
exports.default = router;
