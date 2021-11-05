//Referencias del HTML
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')


const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')

//socket del cliente, que está usando el sitio
const socket=io();


socket.on('connect', ()=>{
    console.log('Conectado');
    lblOffline.style.display='none';
    lblOnline.style.display='';
});


socket.on('disconnect', ()=>{
    console.log('Desconectado del Servidor');
    lblOffline.style.display='';
    lblOnline.style.display='none';
});


btnEnviar.addEventListener('click',()=>{
    const mensaje= txtMensaje.value;
    const payload={
        mensaje,
        id: 123,
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Desde el cliente con id ',id)
    });
});


socket.on('enviar-mensaje', (payload) =>{
   console.log(payload);
});