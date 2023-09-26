const express = require('express')
const hbs = require('hbs');
const path = require('node:path')
require('dotenv').config()

//Inicializaciones
const app = express()
const port = process.env.PORT;

//Template Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Servir contenido estatico
//Middleware
app.use(express.static('public'))

//Rutas

app.get("/",(req, res)=>{
    res.render("home",{
        nombre: "Juan",
        titulo: "Curso de Node"
    });
})

app.get("/generic",(req, res)=>{
    res.render("generic",{
        nombre: "Juan",
        titulo: "Curso de Node"
    });
})

app.get("/elements",(req, res)=>{
    res.render("elements",{
        nombre: "Juan",
        titulo: "Curso de Node"
    });
})


app.get("*",(req, res)=>{
    res.status(404)
    res.send("error 404")
})

//Puerto
app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`)
}) 