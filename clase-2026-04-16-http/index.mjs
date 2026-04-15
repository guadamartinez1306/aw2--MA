//modulo http
import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

const app = http.createServer(async(peticion, respuesta) => {
    //console.log('peticion recibida')
    //console.log(peticion.url)
    if(peticion.method === 'GET'){
        if(peticion.url === '/'){
        respuesta.statusCode = 200
        return respuesta.end('Estas en la raiz')
        }

        if(peticion.url === '/suma'){
        respuesta.statusCode = 200
        const resultado = (5 + 3).toString()
        return respuesta.end(resultado)
        }
    }
    
    if(peticion.method === 'POST'){
        if(peticion.url === '/proceso-formulario'){
            return respuesta.end('se hizo una peticion con verbo post')
        }

        if(peticion.url === '/guardar-datos'){
            const respuesta = await fetch ('https://api.escuelajs.co/api/v1/users')
            const datosApi = await respuestaApi.text()
            try{
                await fsp.writefile(path.join('./datosapi.txt'), datosApi)
                respuesta.statusCode = 201
                return respuesta.end('datos guardados')
            }
            catch(error){
                respuesta.statusCode= 500
                return respuesta.end ('Error en el servidor')

            }
            
        }

    }

    //Fallback
    respuesta.statusCode = 404
    respuesta.end('Recurso no encontrado')
})
app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000')
})