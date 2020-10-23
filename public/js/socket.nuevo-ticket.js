

// Comando para establecer la conexión

var socket = io();

var label = $('#lblNuevoTicket');


// // Saber cuando un usuario se conecta al servidor
// socket.on('connection', (client) => {
//     console.log('Usuario conectado');

//     // // Enviar mensaje de bienvenida
//     // client.emit('enviarMensaje', {
//     //     usuario: 'Administrador',
//     //     mensaje: 'Bienvenido a esta aplicación'
//     // });

//     // Identificar cuando el usuario se desconecto del servidor.
//     client.on('disconnect', () => {
//         console.log('Usuario desconectado');
//     });


// });

socket.on('connect', (client) => {
    console.log('Conectado al servidor');    
});

socket.on('disconnect', (client) => {
    console.log('Desconectado del servidor');    
});

// on 'estadoActual'
socket.on('estadoActual',function(resp){
    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', function(){
    socket.emit('siguienteTicket', null, function(siguienteTicket){
        label.text(siguienteTicket);
    });
});