import express from 'express';
import pool from './conexion.bd.mjs';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';

const PUERTO = 3000;

////////////////

////////////////
const app = express();

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/admin', express.static('./fronts/front-admin'))

app.use('/login', express.static('./fronts/front-login'))

app.use('autenticar', (req, res)=>{
    //Actividad 5
    //Generar id con nanoid
})

app.post('/registrar', async (req, res)=>{
    //1-Capturamos datos
    console.log(req.body)
    const{usuario, pass} = req.body

    //2-Control
    if(!usuario || !pass){
        return res.status(400).json({
            mensaje: 'Datos incompletos'
        })
    }

    //3-Encriptamos clave
    //try{
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hash(pass, salt);
        console.log(hash)
    //}
    //catch(error){
        //console.log(error)
    //}

    //4-Guardamos en BD
    const resultado = await pool.query(`
        INSERT INTO usuarios
            (username, password_hash)
        VALUES 
            ($1, $2)
        RETURNING
            id, username`,
            [
                usuario,
                hash
            ]
    )

    if(resultado.rowCount > 0){
        return res.json({
            mensaje: `El usuario ${usuario} se ha registrado con exito`
        })
    }

    res.json({
        mensaje: 'Registro'
    })
})



app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});