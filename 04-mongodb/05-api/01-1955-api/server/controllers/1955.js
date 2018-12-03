const Person = require('mongoose').model('Person');

module.exports = {
  index(req, res) {
    Person.find({})
      .then(people => res.json(people))
      .catch(error => res.json(error));
  },
  create(req, res) {
    Person.create(req.params)
      .then(person => res.redirect('/'))
      .catch(error => res.json(error));
  },
  destroy(req, res) {
    Person.deleteOne({ name: req.params.name })
      .then(() => res.redirect('/'))
      .catch(error => res.json(error));
  },
  show(req, res) {
    Person.findOne({ name: req.params.name })
      .then(person => res.json(person ? person : 'No such person existed in 1955'))
      .catch(error => res.json(error));
  }
};