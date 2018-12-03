const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();

app.use(parser.json());

const { Schema } = mongoose;

const PersonSchema = new Schema({
  name: String
}, {timestamps: true});
const Person = mongoose.model('Person', PersonSchema);

app.get('/', function(req, res) {
  Person.find({})
    .then(people => {
      res.json({ people: people });
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/new/:name', function(req, res) {
  const person = new Person({
    name: req.params.name
  });
  person.save()
    .then(person => {
      console.log(person);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/remove/:name', function(req, res) {
  Person.deleteOne({ name: req.params.name })
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/:name', function(req, res) {
  Person.find({ name: req.params.name })
    .then(person => {
      res.json({ person });
    })
    .catch(error => {
      console.log(error);
    });
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/1955', {
  useNewUrlParser: true
});
mongoose.connection.on('connected', () => console.log('Mongo connected'));
app.listen(port, () => console.log(`Listening on port ${port}`));