

const socketController= (socket) =>{
    console.log('Cliente conectado',socket.id);

    socket.on('disconnect', ()=>{
        console.log('Desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload,callbackDesdeFront) =>{
        const id= 12345;
        callbackDesdeFront(id);
        socket.broadcast.emit('enviar-mensaje',payload);

    });

}

module.exports={
    socketController
}