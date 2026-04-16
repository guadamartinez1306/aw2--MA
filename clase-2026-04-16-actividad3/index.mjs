import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

const app = http.createServer(async(peticion, respuesta) => {
   
    if(peticion.method === 'GET'){
        if(peticion.url === ' /usuarios'){
                
                try{
                    const respuestaApi = await fetch ('https://api.escuelajs.co/api/v1/users')
                    const datosApi = await respuestaApi.json()
                    await fsp.writefile(path.join('./datosapi.json'), datosApi)
                    respuesta.statusCode = 200

                    respuesta.setHeader('content-type', 'application/json')
                    return respuesta.end('Datos guardados')
                }
                catch(error){
                    respuesta.statusCode= 404
                    
                    return respuesta.end ('Recurso no encontrado')
    
                }
                
            }

    }
    

})
app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000')
})