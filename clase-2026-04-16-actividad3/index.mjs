// 1. Creo servidor HTTP
// 2. Detectamos el método GET
// 3. Si la ruta es /usuarios:
//    - Hacemos fetch a la API externa
//    - Guardamos los datos en un archivo JSON
//    - Leemos el archivo
//    - Enviamos los datos al cliente
// 4. Si no coincide la ruta:
//    - Responde con 404
// 5. Manejo errores con try/catch

import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

async function obtenerUsuarios() {
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')
    return await respuesta.json()
}

async function guardarArchivo(ruta, datos) {
    await fsp.writeFile(ruta, JSON.stringify(datos))
}

async function leerArchivo(ruta) {
    const datos = await fsp.readFile(ruta, 'utf-8')
    return JSON.parse(datos)
}

function filtrarUsuarios(usuarios) {
    return usuarios.filter(usuario => usuario.id < 10)
}

const app = http.createServer(async(peticion, respuesta) => {
   
    if(peticion.method === 'GET'){
        if(peticion.url === '/usuarios'){

                try{
                    const rutaArchivo = path.join('./datosapi.json')

                    const datosApi = await obtenerUsuarios()
                    await guardarArchivo(rutaArchivo, datosApi)
                    const datosLeidos = await leerArchivo(rutaArchivo)

                    respuesta.statusCode = 200
                    respuesta.setHeader('content-type', 'application/json')
                    return respuesta.end(JSON.stringify(datosLeidos))
                }
                catch(error){
                    respuesta.statusCode = 500
                    return respuesta.end('Error interno del servidor')
    
                }
            }

         if(peticion.url === '/usuarios/filtrados'){
                    try{
                        const rutaArchivo = path.join('./datosapi.json')

                        const datos = await leerArchivo(rutaArchivo)
                        const filtrados = filtrarUsuarios(datos)

                        respuesta.statusCode = 200
                        respuesta.setHeader('content-type', 'application/json')
                        return respuesta.end(JSON.stringify(filtrados))
                    }
                    catch(error){
                        respuesta.statusCode = 400
                        return respuesta.end('Primero debe ejecutar /usuarios')
                    }
            }


        

    }
    respuesta.statusCode = 404
    respuesta.setHeader('content-type', 'text/plain')
    respuesta.end('Recurso no encontrado')
    

})
app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000')
})