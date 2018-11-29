const express = require('express'),
 path = require('path'),
 parser = require('body-parser'),
 mongoose = require('mongoose'),
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

// set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quoting_dojo');

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Name required']
  },
  quote: {
    type: String,
    required: [true, 'Quote required']
  }
}, {timestamps: true});

const Quote = mongoose.model('Quotes', QuoteSchema);

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/quotes', function(req, res) {
  Quote.find({})
  .then(quotes => {
    res.render('quotes', {quotes: quotes});
  })
  .catch(error => {
    console.log(error);
    res.render('index');
  })
});

app.post('/quotes', function(req, res) {
  const quote = new Quote({
    name: req.body.name,
    quote: req.body.quote
  });
  quote.save()
  .then(savedQuote => {
    console.log(savedQuote);
    res.redirect('/quotes');
  })
  .catch(error => {
    Object.keys(error.errors).map(key => req.flash('errors', error.errors[key].message));
    res.redirect('/');
  });
});

app.get('/clear', function(req, res) {
  Quote.remove({}, function(error) {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/quotes');
    }
  });
});


app.listen(port, () => console.log(`Listening on port ${port}`));