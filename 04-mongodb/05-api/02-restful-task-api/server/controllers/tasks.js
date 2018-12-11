const Task = require('mongoose').model('Task');

module.exports = {
  index(req, res) {
    Task.find({})
      .then(tasks => res.json({tasks}))
      .catch(error => res.json(error));
  },
  show(req, res) {
    Task.findById(req.params.id)
      .then(task => res.json({task}))
      .catch(error => res.json(error));
  },
  create(req, res) {
    Task.create(req.body)
      .then(task => {
        console.log(task);
        res.json({task})
      })
      .catch(error => res.json(error));
  },
  update(req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(task => res.json({task}))
      .catch(error => res.json(error));
  },
  destroy(req, res) {
    Task.findOneAndDelete(req.params.id)
      .then(result => res.json({result}))
      .catch(error => res.json(error));
  }
};
