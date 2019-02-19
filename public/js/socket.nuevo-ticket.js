
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function () {
    console.log('Connectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Desonnectado del servidor');
});

socket.on('estadoActual', function (resp) {
    label.text(resp.actual);
});

$('button').on('click', function () {

    socket.emit('siguienteTicket', null, function (siguienteTicket) {
        console.log(siguienteTicket);
        label.text(siguienteTicket);
    });


});

