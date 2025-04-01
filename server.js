const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


const bodyParser = require('body-parser');
app.use(bodyParser.json());



/*
 * IMPORTAR RUTAS
 */
const usersRoutes = require('./src/routes/userToutes');



const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.disable('x-powered-by');

app.set('port', port);

/*
 * LLAMADO DE LAS RUTAS
 */
usersRoutes(app);



server.listen(3000, 'localhost', function() {
    console.log('Aplicacion de NodeJS ' + port + ' Iniciada...')
});


// ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});


module.exports = {
    app: app,
    server: server
}

// 200 - ES UN RESPUESTA EXITOSA
// 404 - SIGNIFICA QUE LA URL NO EXISTE
// 500 - ERROR INTERNO DEL SERVIDOR