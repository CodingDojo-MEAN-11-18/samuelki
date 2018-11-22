var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");

var app = express();

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  req.session.count += 1;
  res.render('index', { count: req.session.count });
});

app.post('/reset', function (req, res) {
  req.session.count = -1;
  res.redirect('/');
});

app.post('/plus2', function (req, res) {
  req.session.count += 1;
  res.redirect('/');
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});