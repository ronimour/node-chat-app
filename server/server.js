const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chat app',
    createAt: new Date()
  });

  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: `New user ${socket.id} joined`,
    createAt: new Date()
  });
  // socket.emit('newMessage', {
  //   from: 'userOne@example.com',
  //   text: 'Meet me at 6pm',
  //   createAt: new Date()
  // });

  // socket.on('createMessage', (message) => {
  //   console.log('createMessage', message);
  //   io.emit('newMessage', {
  //     from: message.from,
  //     text: message.text,
  //     createAt: new Date()
  //   });
  // });

  socket.on('disconnect', () => {
    console.log(`User ${socket.id} was disconnected`);
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
