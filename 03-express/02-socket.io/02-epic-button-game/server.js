const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const server = app.listen(port, () => console.log(`Listening on port ${port}`));
const io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.render('index');
});

let count = 0;
io.on('connection', socket => {
  console.log("incoming socket connection");

  socket.on('buttonClicked', function() {
    numberUpdated(++count);  // ++count is invoked before the method is called
  });

  socket.on('reset', function() {
    numberUpdated(count = 0);
  });

  socket.emit('numberUpdated', count);  // new socket connection gets updated count
});

function numberUpdated(number) {
  io.emit('numberUpdated', number);
}