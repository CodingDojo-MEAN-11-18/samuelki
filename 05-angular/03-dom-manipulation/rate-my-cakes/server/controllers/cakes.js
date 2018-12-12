const Cake = require('mongoose').model('Cake');

module.exports = {
  index(req, res) {
    Cake.find({})
      .then(cakes => res.json({cakes}))
      .catch(error => res.json(error));
  },
  show(req, res) {
    Cake.findById(req.params.id)
      .then(cake => res.json({cake}))
      .catch(error => res.json(error));
  },
  create(req, res) {
    console.log('Creating cake', req.body);
    Cake.create(req.body)
      .then(cake => {
        console.log('Cake created', cake);
        res.json({cake})
      })
      .catch(error => res.json(error));
  }
};
