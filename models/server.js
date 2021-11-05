const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controllers');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server= require('http').createServer(this.app);
        this.io= require('socket.io')(this.server);

        this.paths={
        }

        //Middlewares
        //Funciones que añaden otra funcionalidad la web server  ::
        this.middleware();

        //Rutas de aplicación
        this.routes();

        // Configuracion de Sockets en Eventos
        this.sockets();
    }

    middleware() {

        this.app.use(cors());

        //directorio publico
        this.app.use(express.static('public'));

    }

    routes() {

        // this.app.use(this.paths.uploads, require('../routes/uploads'));

    }

    sockets(){

        this.io.on('connection', socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Server.... en puerto ', this.port);
        });
    } 

}


module.exports = Server;