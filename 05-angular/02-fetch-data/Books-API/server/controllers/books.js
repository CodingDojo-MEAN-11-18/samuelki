const Author = require('mongoose').model('Author');
const Book = require('mongoose').model('Book');

module.exports = {
  index(req, res) {
    Author.find(req.body)
      .then(authors => res.json(authors))
      .catch(error => res.json(error));
  },
  show(req, res) {
    Author.findById(req.params.id)
      .then(author => res.json(author))
      .catch(error => res.json(error))
  },
  createAuthor(req, res) {
    Author.create(req.body)
      .then(author => {
        console.log(author);
        res.json({ author });
      })
      .catch(error => res.json(error));
  },
  createBook(req, res) {
    Book.create(req.body)
      .then(book => {
        console.log(book);
        res.json({ book });
      })
      .catch(error => res.json(error));
  },
  update(req, res) {
    Author.findOneAndUpdate(req.params.id, req.body, {new:true})
      .then(author => res.json(author))
      .catch(error => res.json(error));
  },
  destroyAuthor(req, res) {
    Author.findOneAndDelete({_id: req.params.id})
      .then(result => res.json(result))
      .catch(error => res.json(error));
  },
  destroyBook(req, res) {
    Book.findOneAndDelete({_id: req.params.id})
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
};
