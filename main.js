var port = 8901;
var io = require('socket.io').listen(port);

console.log('pulse-chat-server listening on port '+port);

io.sockets.on('connection', function (socket) {
    console.log('Socket connection received');
});


