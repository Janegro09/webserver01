
const http = require('http');
const puerto = 8080;

http.createServer( (req,res) => {

    res.write('Hola mundo');
    res.end();

})
.listen( puerto );

console.log("Escuchando el puerto ", puerto)