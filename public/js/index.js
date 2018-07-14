var socket= io();
socket.on('connect', function () {
    console.log('connected to the server')

    socket.emit('createMessage',{
        from: 'lawrence',
        text: 'Yup, that works for me.'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from the servers');

});

socket.on('newMessage', function (message){
    console.log('newMessage', message);

});