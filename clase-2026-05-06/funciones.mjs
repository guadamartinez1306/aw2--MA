import productos from './productos.mjs'

export function obtenerProductos(req, res){
    res.json(productos)
}

export function eliminarProducto(req, res){
    //LOGICA EXTRA 
    const id_producto = Number(req.params.id) //verificar si es un numero
    //FILTRAMOS
    const productosFiltrados = productos.filter((producto)=>{
        return id_producto !== Number(producto.id)
    })

    productos.length = 0 //ponemos en 0
    productos.push(...productosFiltrados)

    const respuesta = {
        mensaje: 'Producto eliminado'
    } 

    res.json(respuesta)
    
}

export function obtenerProductosporID(req, res){
    //LOGICA EXTRA 
    const id_producto = Number(req.params.id) //verificar si es un numero
    //FILTRAMOS
    const productosFiltrados = productos.filter((producto)=>{
        return id_producto === Number(producto.id)
    })

    //Logica verificar si hay productos
    if(productosFiltrados.length > 0){
        res.json(productosFiltrados)
    }
    else{
        const respuesta = {
            mensaje: 'Producto no encontrado'
        }
        res.status(404).json(respuesta)
    }
    
}

export function altaProducto(req, res){
    
    const nuevoProducto = req.body
    productos.push(nuevoProducto)
    const respuesta = {
        mensaje: 'Producto dado de alta'
    }
    res.json(respuesta)
    
}