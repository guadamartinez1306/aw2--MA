import productos from '../../productos.mjs'

export function obtenerTodo(){
    //Haria una consulta a una BD
    return productos.datos
}

export function obtenerUno(id){
    //Filtrar por ID
    
    const productosFiltrados = productos.datos.filter((producto)=>{
        return Number(producto.id) === id
    })

    return productosFiltrados
}