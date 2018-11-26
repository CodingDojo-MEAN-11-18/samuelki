const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.join(__dirname, 'static')));
app.use(parser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
  res.render('index');
});

// this gets the socket.io module
const io = require('socket.io')(server);

// listen to connection even from the client side
io.on('connection', function (socket) {
  // server listens to "posting_form" event
  socket.on('posting_form', function (data) {
    let random_number = Math.floor((Math.random()*1000) + 1);
    // let message = `You emitted the following information to the server:
    // Name: ${data.name},
    // Dojo Location: ${data.location},
    // Favorite Language: ${data.language},
    // Comment: ${data.comment}`;

    // will emit the data to the client
    socket.emit('updated_message', {response: data});
    socket.emit('random_number', {response: random_number});
  })
});