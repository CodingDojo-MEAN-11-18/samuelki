const users = [];
const messages = [];

module.exports = function Route(app, server) {

  app.get('/', function(req, res) {
    res.render('index');
  })

  const io = require('socket.io')(server);

  io.on('connection', socket => {
    console.log("incoming socket connection");

    socket.on('chatroom', function(data) {
      const existing_user = isUser(data.user);
      const event = existing_user ? 'all_users' : 'load_messages';
      const content = existing_user ? {error: "This user already exists"} : {current_user: data.user, messages: messages};

      if (!existing_user){
        users.push(data.user);
      }
      socket.emit(event, content);
    });

    socket.on('new_message', function(data) {
      messages.push({name: data.user, message: data.message});
      io.emit('post_message', {newMessage: data.message, user: data.user});
    });
  });

};

function isUser(user) {
  const total_users = users.length;

  for (let i = 0; i < total_users; i++) {
    if (user === users[i]) {
      return true;
    };
  };
  return false;
};