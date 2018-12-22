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
        console.log(author);
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
  },
  quoteEdit(req, res) {
    console.log(req.body);
    const { change } = req.body;
    const { quoteid } = req.params;
    Author.findOneAndUpdate({'quotes._id': quoteid}, {$inc: {'quotes.$.votes': change}}, { new: true })
      .then(quote => {
        console.log(req.params);
        console.log(quote);
        res.json(quote);
      })
      .catch(error => console.log(error));
  },
  quoteDelete(req, res) {
    const quoteid = req.params.quoteid;
    const id = req.params.id
    Author.findOneAndUpdate(id, {$pull: {quotes: {_id: quoteid}}}, { new: true })
      .then(data => {
        res.json(data);
      })
      .catch(error => console.log(error));
  },
};
