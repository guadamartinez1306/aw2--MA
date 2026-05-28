import express from 'express'
import './iniciar.env.mjs'
import rutasProductos from './modulos/productos/rutas.productos.mjs'

console.log(process.env);

const PUERTO = 3000

const app = express()

app.use(rutasProductos)

app.listen(PUERTO)