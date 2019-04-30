module.exports = function(io) {
  io.on('connection', socket => {
    socket.on('new_chat_message', message => {
      io.emit('receive_message', message);
    });
  });
};
