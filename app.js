require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );


app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Javier Sosa',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        titulo: 'Curso de Node',
        nombre: 'Javier Sosa'
    })
})
app.get('/elements', (req, res) => {
    res.render('elements',{
        titulo: 'Curso de Node',
        nombre: 'Javier Sosa'
    })
})
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
})
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo desde su respectiva ruta')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })