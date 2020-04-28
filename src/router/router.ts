import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get( '/heroes', (req: Request, res: Response) => {


    const query = ` SELECT * FROM heroes `;

    // Ejecutando query de la clase mysql.ts
    MySQL.ejecutarQuery( query, ( err: any, heroes: Object[] ) => {
        
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            })
        } else {
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



} );

router.get( '/heroes/:id', (req: Request, res: Response) => {

    // Llamando id de los parámetros de url
    const id = req.params.id;

    // Validando id para evitar inyección
    const escapeID = MySQL.instance.cnn.escape( id );

    const query = ` SELECT * FROM heroes WHERE id = ${ escapeID } `;

    // Ejecutando query de la clase mysql.ts
    MySQL.ejecutarQuery( query, ( err: any, heroe: Object[] ) => {
        
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            })
        } else {
            res.json({
                ok: true,
                heroe: heroe[0]
            });
        }

    });




} );

// Exportando router
export default router;