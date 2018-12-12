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
    Cake.create(req.body)
      .then(cake => {
        console.log(cake);
        res.json({cake})
      })
      .catch(error => res.json(error));
  },
  rate(req, res) {
    Cake.findById(req.params.id)
      .then(cake => {
        cake.rating.push(req.body);
        cake.save();
      })
      .catch(error => res.json(error));
  }
}
