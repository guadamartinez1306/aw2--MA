import productos from './productos.mjs'

export function obtenerProductos(req, res){
    res.json(productos.datos)
}

export function eliminarProducto(req, res){
    //LOGICA EXTRA 
    const id_producto = Number(req.params.id) //verificar si es un numero
    //FILTRAMOS
    const productosFiltrados = productos.datos.filter((producto)=>{
        return id_producto !== Number(producto.id)
    })

    productos.datos.length = 0 //ponemos en 0
    productos.datos.push(...productosFiltrados)

    const respuesta = {
        mensaje: 'Producto eliminado'
    } 

    res.json(respuesta)
    
}

export function obtenerProductosporID(req, res){
    //LOGICA EXTRA 
    const id_producto = Number(req.params.id) //verificar si es un numero
    //FILTRAMOS
    const productosFiltrados = productos.datos.filter((producto)=>{
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

export function modificarProducto(req, res){
    const id_producto = Number(req.params.id)
    const productoAModificar = req.body
    //obteniendo el indice con indexOf()
    productos.datos.forEach((producto)=>{
        const indice = productos.datos.indexOf(producto)
    })

    if(id_producto === Number(producto.id)){
        productoaAModificar.id = id_producto
        productos.datos[indice] = productoAModificar
    }

    const respuesta = {
        mensaje: 'Producto modificado con id' + id_producto
    }
}

export function altaProducto(req, res){
    
    const nuevoProducto = req.body
    const proximoId = Number(productos.ultimo_id) + 1

    //Agregar propiead id
    nuevoProducto.id = proximoId

    //Actualizamos referencia
    productos.ultimo_id = proximoId

    productos.datos.push(nuevoProducto)
    const respuesta = {
        mensaje: 'Producto dado de alta'
    }
    res.json(respuesta)
    
}