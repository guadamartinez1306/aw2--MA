import * as modelo from './modelo.productos.mjs'
import * as vista from './vista.productos.mjs'
//modelo es un espacio de nombres

export async function obtenerTodos(req, res){
    const datosProductos = await modelo.obtenerTodos()
    const respuestaVista = vista.obtenerTodos(datosProductos)


    res.json(respuestaVista)

}

export async function obtenerUno(req, res){
    const idProducto = Number(req.params.id)
    const datosProductos = await modelo.obtenerUno(idProducto)
    const resultado = vista.obtenerUno(datosProductos)
    //verificar si hay productos
    if(resultado.length > 0 ){
        res.json(resultado)
    }
    else{
        res.status(404).json({mensaje: `Producto con id ${idProducto} no encontrado`})
    }
    
}

export async function eliminarUno(req, res){
    const idProducto = Number(req.params.id)
    const datosProductos = await modelo.eliminarUno(idProducto)
    const resultado = vista.eliminarUno(datosProductos)
    //verificar si hay productos
    if(resultado.length > 0 ){
        res.json(resultado)
    }
    else{
        res.status(404).json({mensaje: `Producto con id ${idProducto} no encontrado`})
    }
    
}