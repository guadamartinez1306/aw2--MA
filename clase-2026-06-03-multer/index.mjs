import express from 'express'
import multer from 'multer'
import {nanoid} from 'nanoid'
import mime from 'mime-type'

const PUERTO = 3000

const app = express()

const almacenamiento = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './archivos')
  },
  filename: function (req, file, cb) {
    const extension = mime.extension(file.mimetype)
    const nombreImagen = nanoid() + '.' + mime.extension(file.mimetype)
    cb(null, nombreImagen)
  }
})


const subirArchivo = multer({
    storage: almacenamiento
})

const gestionArchivos = subirArchivo.single('imagen')

app.use('/admin', express.static('./front-admin'))

app.post('/subir-archivo', (req, res)=>{
    gestionArchivos(req, res, (error)=>{
        if(error) return res.status(500).json({mensaje: 'Error en el servidor'})

            console.log(req.file)
    res.json({mensaje: 'ruta subida de archivos del formulario'})
    })
    
})

app.listen(PUERTO)