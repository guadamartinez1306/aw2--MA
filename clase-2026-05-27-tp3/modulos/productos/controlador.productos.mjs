import * as modelo from './mpdelo.productos.mjs'
export async function obtenerTodos(req, res){
    const productos = await modelo.obtenerTodos()

    if(productos.length === 0){
        return res.status(4040).json({mensaje: 'Registros no encontrados'})
    }

    res.json(productos)
}

export async function crearUno(req, res){
    const datosproductos = req.body
    //Futuro en la capa de servicios, logica de negocios
    //Verificar datos
    const productos = await modelo.crearUno(datosproductos)

    if(productos.length === 0){
        return res.status(400).json({mensaje: 'No se pudo dar de alta'})
    }
    res.json({mensaje: 'Producto dado de alta', producto: productos})
}