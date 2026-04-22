import express from 'express'

const PUERTO = 4000
//instancia servidor expresss
const app = express()

app.get('/', (req, res)=>{
    res.set('content-type', 'text/html') //Cabecera, Header
    //MIME TYPES
    res
        .status(200) //codigo de estado
        .end('<h1>hola con get<h1>') //cuerpo, contenido
})

app.get('/materias', (req, res)=>{
    res.set('content-type', 'application/json') //Cabecera, Header
    //MIME TYPES
    res
        .status(200) //codigo de estado
        .end(`
        {
            "id":"1"
             "materia":"AW2",
             "profe":"Andres",
             "Lab":"1.2"
        }

        {
            "id":"2"
             "materia":"BDD"
             "profe":"Victor"
             "Lab":"1.5"
        }
            
        {
            "id":"3"
             "materia":"PP2"
             "profe":"Esteban"
             "Lab":"3.1"
        }`) //cuerpo, contenido
})

app.post('/', (req, res)=>{
    res.set('content-type', 'application/json')
    res.end('{"materia":"AW2"}')
})

app.get('/saludo', (req, res)=>{
    res.status(304)
    res.end('hola Yaz')
})
app.get('/pregunta', (req, res)=>{
    res.end('Estudiaste para bdd?')
})


app.post('/prueba', (req, res)=>{
    res.end('funciona')
})
app.post('/color', (req, res)=>{
    res.end('azuuuul')
})


//abrir un puerto
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})