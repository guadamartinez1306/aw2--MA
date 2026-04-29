import express from 'express'
import path from 'node:path'


const puerto = 3000

const app = express()

//Middlewares

//levantamos una web estatica
console.log (path.resolve('front'))
app.use('/front', express.static(path.resolve('front')))

function middleware1(req, res, next){
    console.log('middleware 1')
    next()
}

app.use('/', middleware1)


//function middleware2(req, res, next){
 //   console.log('middleware 2')
   // next()
//}
//

app.get('/', middleware1, (req, res)=>{
    console.log('ejecucion del callback final')
    res.send('Hola')
})

app.get('/saludo', (req, res)=> {
    console.log('ejeucion del callback final con saludo')
    res.send('Hola ruta/saludo')
})

app.listen(puerto,()=>{
    console.log(`https:/localhost:${puerto}`)
})