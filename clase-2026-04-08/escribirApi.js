import fsp from 'node:fs/promises'
import path from 'node:path'
try{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const productos = await respuesta.json()

    const ruta = path.join('./api.json')
    const contenido = JSON.stringify(productos, null, 4)
    await fsp.writeFile(ruta, contenido)
    //console.log(productos)
} 
catch(e){
    console.log(e)
}