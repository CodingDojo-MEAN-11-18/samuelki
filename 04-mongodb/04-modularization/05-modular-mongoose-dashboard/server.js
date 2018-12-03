const express = require('express'),
path = require('path'),
parser = require('body-parser'),
session = require('express-session'),
app = express(),
port = process.env.PORT || 8000;

app.use(parser.urlencoded({extended: true}));
app.use(session({
  secret: 'thisisasecretkey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use('/static', express.static(path.join(__dirname + '/static')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./server/config/routes')(app);
require('./server/config/database');

app.listen(port, () => console.log(`Listening on port ${port}`));