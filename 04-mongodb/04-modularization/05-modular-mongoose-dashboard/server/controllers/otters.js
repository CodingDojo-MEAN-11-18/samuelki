const Otter = require('../models/otter');

module.exports = {
  index(req, res) {
    Otter.find({}, function(err, otters) {
      if (err) { console.log(err); }
      res.render('index', { otters: otters });
    });
  },
  new(req, res) {
    res.render('new');
  },
  show(req, res) {
    Otter.find({ _id:req.params.id }, function(err, info) {
      if (err) { console.log(err); }
      res.render('detail', { info: info });
    });
  },
  create(req, res) {
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
  },
  edit(req, res) {
    Otter.find({ _id:req.params.id })
    .then(editedOtter => {
      res.render('edit', { editedOtter: otter[0] });
    })
    .catch(error => {
      console.log(error);
  });
  },
  update(req, res) {
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
  },
  destroy(req, res) {
    Otter.remove({ _id:req.params.id })
    .then(otter => {
      console.log(otter, "deleted");
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
  }
};