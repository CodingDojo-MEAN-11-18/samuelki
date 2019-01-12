const Note = require('mongoose').model('Note');

module.exports = {
  index(req, res) {
    Note.find({})
      .then(notes => res.json(notes))
      .catch(error => console.log(error));
  },
  show(req, res) {

  },
  create(req, res) {
    Note.create(req.body)
      .then(note => res.json(note))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        res.json({ error: errors });
        console.log(errors);
      });
  },
  update(req, res) {

  },
  delete(req, res) {
    Note.findByIdAndRemove(req.params.id)
      .then(note => res.json(note))
      .catch(error => console.log(error));
  }
};
