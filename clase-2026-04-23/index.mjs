import express from 'express'

const PUERTO = 3000

const productos = 
    [
        {
            id: 1,
            nombre: "Camiseta",
            precio: 20000
        
        },
        {
            id: 2,
            nombre: "Pantalon",
            precio: 30000
        
        }
    ]

//instancia servidor expresss
const app = express()



//Avisar a express que verifique si hay datos del cliente en formato .json
app.use(express.json())

app.get('/productos/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    console.log(id)
    //Filtrar
    const arregloFiltrado = productos.filter((producto)=>{
        return producto.id === id
    })
    res.json(arregloFiltrado)
})

app.get('/productos', (req, res)=>{
    res.json(productos)
})


app.post('/productos', (req, res)=>{
   //Agrega al objeto req o peticion una propiedad llamada "body"
   //console.log(req.body)
   const producto = req.body
   productos.push(producto)
   res.status(201).json({mensaje: 'Producto creado'})
})

//abrir un puerto
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})