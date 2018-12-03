const express = require('express'),
 path = require('path'),
 parser = require('body-parser'),
 flash = require('express-flash'),
 session = require('express-session'),
 port = process.env.PORT || 8000,
 app = express();

// set up body-parser to parse form data
app.use(parser.urlencoded({extended: true}));

// need session to use express flash messages
app.use(session({
  secret: 'thisisasecretkey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use(flash());

// point server to views
app.set('views', path.join(__dirname, 'views'));
// use ejs as our view engine
app.set('view engine', 'ejs');

require('./server/config/routes')(app);
require('./server/config/database');

app.listen(port, () => console.log(`Listening on port ${port}`));