const Author = require('mongoose').model('Author');

module.exports = {
  index(req, res) {
    Author.find({})
      .then(authors => {
        console.log(authors);
        res.json({ authors });
      })
      .catch(error => {
        console.log(error);
        res.status(400).json(error);
      });
  },
  show(req, res) {
    Author.findById(req.params.id)
      .then(author => res.json({ author }))
      .catch(error => console.log(error));
  },
  create(req, res) {
    Author.create(req.body)
      .then(author => {
        console.log("Successfully created author!", author);
        res.json(author);
      })
      .catch(error => {
        console.log(error);
        res.status(400).json(error);
      });
  },
  edit(req, res) {
    Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(author => {
        console.log("Successfully edited author!", author);
        res.json(author);
      })
      .catch(error => {
        console.log(error);
        res.status(400).json(error);
      });
  },
  delete(req, res) {
    Author.findByIdAndRemove(req.params.id)
      .then(author => {
        console.log("Successfully deleted author!", author);
        res.json(author);
      })
      .catch(error => console.log(error));
  }

};
