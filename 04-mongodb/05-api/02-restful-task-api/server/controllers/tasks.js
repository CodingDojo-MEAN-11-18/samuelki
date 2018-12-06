const Task = require('mongoose').model('Task');

module.exports = {
  index(req, res) {
    Task.find({})
      .then(task => res.json(task))
      .catch(error => res.json(error));
  },
  show(req, res) {
    Task.findById(req.params.id)
      .then(task => res.json(task))
      .catch(error => res.json(error));
  },
  create(req, res) {
    Task.create(req.body)
      .then(task => {
        console.log(task);
        res.json({ task });
      })
      .catch(error => res.json(error));
  },
  update(req, res) {
    Task.findOneAndUpdate({_id: req.params.id }, {
      title: req.params.title,
      description: req.params.description,
      completed: req.params.completed,
    })
      .then(() => res.redirect('/'))
      .catch(error => res.json(error));
  },
  destroy(req, res) {
    Task.findOneAndDelete({_id: req.params.id})
      .then(() => res.redirect('/'))
      .catch(error => res.json(error));
  }
};
