import express from 'express'
import {eliminarProducto, obtenerProductos, obtenerProductosporID, altaProducto, modificarProducto} from './funciones.mjs'

const PUERTO = 3000

const app = express()
app.use(express.json()) //avisar a express que voy a mandar datos del tipo JSON

//Configuracion de una API REST

//GET /api/v1/productos
app.get('/api/v1/productos', obtenerProductos)

//GET /api/v1/productos/:id
app.get('/api/v1/productos/:id', obtenerProductosporID)

//POST /api/v1/productos ----> damos de alta
app.post('/api/v1/productos', altaProducto)

//PUT /api/v1/productos/:id ----> modificar un registro 
app.put('/api/v1/productos/:id', modificarProductoarProducto)

//DELETE /api/v1/productos/:id ----> eliminar un registro
app.delete('/api/v1/productos/:id', eliminarProducto)

app.listen(PUERTO)