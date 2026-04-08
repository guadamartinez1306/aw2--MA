try{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const productos = await respuesta.json()
    console.log(productos)
} 
catch(e){
    console.log(e)
}