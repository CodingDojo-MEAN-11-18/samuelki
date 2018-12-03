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
    const task = new Task({
      title: req.params.title,
      description: req.params.description,
      completed: req.params.completed
    });
    task.save()
      .then(task => res.json(task))
      .catch(error => res.json(error));
  },
  update(req, res) {
    Task.findById(req.params.id)
      .then(task => {
        task.title = req.params.title;
        task.description = req.params.description;
        task.completed = req.params.completed;
      })
      .catch(error => res.json(error));
  },
  destroy(req, res) {
    Task.deleteOne({ id: req.params.id })
      .then(() => res.redirect('/'))
      .catch(error => res.json(error));
  }
};