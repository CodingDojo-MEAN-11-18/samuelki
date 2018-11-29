const express = require('express'),
path = require('path'),
mongoose = require('mongoose'),
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

mongoose.connect('mongodb://localhost/mongoose_dashboard');
const OtterSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const Otter = mongoose.model('Otter', OtterSchema);


app.get('/', function(req, res) {
  Otter.find({}, function(err, otters) {
    if (err) { console.log(err); }
    res.render('index', { otters: otters });
  });
});

app.get('/otters/new', function(req, res) {
  res.render('new');
});

app.get('/otters/:id', function(req,res) {
  Otter.find({ _id:req.params.id }, function(err, info) {
    if (err) { console.log(err); }
    res.render('detail', { info: info });
  });
});

app.post('/otters', function(req, res) {
  const otter = new Otter({
    name: req.body.name,
    age: req.body.age
  });
  otter.save()
  .then(savedOtter => {
    console.log(savedOtter, "added");
    res.redirect('/');
  })
  .catch(error => {
    console.log(error);
  });
});

app.get('/otters/edit/:id', function(req, res) {
  Otter.find({ _id:req.params.id })
  .then(editedOtter => {
    res.render('edit', { editedOtter: otter[0] });
  })
  .catch(error => {
    console.log(error);
  });
});

app.post('/otters/:id', function(req, res) {
  Otter.findOne({ _id:req.params.id })
  .then(otter => {
    otter.name = req.body.name;
    otter.age = req.body.age;
    otter.save()
    .then(updatedOtter => {
      console.log(updatedOtter, "edited");
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
  })
  .catch(error => {
    console.log(error);
  });
});

app.get('/otters/destroy/:id', function(req, res) {
  Otter.remove({ _id:req.params.id })
  .then(otter => {
    console.log(otter, "deleted");
    res.redirect('/');
  })
  .catch(error => {
    console.log(error);
  });
});


mongoose.connection.on('connected', () => console.log('mongo connected'));
app.listen(port, () => console.log(`Listening on port ${port}`));