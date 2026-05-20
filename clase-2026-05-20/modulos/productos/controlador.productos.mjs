import * as modelo from './modelo.productos.mjs'
import * as vista from './vista.productos.mjs'
//modelo es un espacio de nombres

export function obtenerTodos(req, res){
    const datosProductos = modelo.obtenerTodo()
    const respuestaVista = vista.obtenerTodos(datosProductos)


    res.json(respuestaVista)

}

export function obtenerUno(req, res){
    const idProducto = Number(req.params.id)
    const datosProductos = modelo.obtenerUno(idProducto)

    //verificar si hay productos
    if(datosProductos.datos.length > 0 ){
        res.json(datosProductos)
    }
    else{
        res.status(404).json({mensaje: `Producto con id ${idProducto} no encontrado`})
    }
    
}