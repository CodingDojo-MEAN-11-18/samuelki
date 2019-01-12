const Player = require('mongoose').model('Player');

module.exports = {
  index(req, res) {
    Player.find({})
      .then(players => res.json(players))
      .catch(error => console.log(error));
  },
  show(req, res) {

  },
  create(req, res) {
    Player.create(req.body)
      .then(player => res.json(player))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        res.json({ error: errors });
        console.log(errors);
      });
  },
  update(req, res) {
    console.log(req.body.status);
    Player.findByIdAndUpdate(req.params.id)
      .then(player => {
        player.status = req.body.status;
        player.save();
        res.json(player);
      })
      .catch(error => console.log(error));
  },
  delete(req, res) {
    Player.findByIdAndRemove(req.params.id)
      .then(player => res.json(player))
      .catch(error => console.log(error));
  },
};
