var express = require('express');
var socket = require('socket.io');

// App Setup
var app = express();
var server = app.listen(3003, function(){
    console.log("Listening on 3003");
});

// Socket Setup
var io = socket(server);

io.on('connection', function(socket) {
    console.log("Client Connected:", socket.id);
    socket.emit('SERVER_MESSAGE', {message: "Connection Made"});


    
    socket.on('JOIN', function(data) {
        socket.join(data.room);
        io.sockets.emit('SERVER_MESSAGE', {message: "JOIN SUCCESSFUL"});
    });

    socket.on('MOVE', function(data) {
        io.to(data.room).emit('some event');
    })
});


// var matchmaking = io
//   .of('/matchmaking')
//   .on('connection', function (socket) {
//     chat.emit('a message', {
//         everyone: 'in'
//       , '/chat': 'will get'
//     });
//   });

// var news = io
//   .of('/news')
//   .on('connection', function (socket) {
//     socket.emit('item', { news: 'item' });
//   });


//   io.on('connection', function(socket){
//     socket.join('some room');
//   });

  

//   io.on('connection', function(socket){
//     socket.on('say to someone', function(id, msg){
//       socket.broadcast.to(id).emit('my message', msg);
//     });
//   });