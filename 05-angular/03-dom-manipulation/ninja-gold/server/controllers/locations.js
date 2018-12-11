const Location = require('mongoose').model('Location');

module.exports = {
  index(req, res) {
    Location.find({})
      .then(locations => res.json({ locations }))
      .catch(error => console.log(error));
  },
  create(req, res) {
    console.log('Creating location...', req.body);
    Location.create(req.body)
      .then(location => {
        console.log(`Location created: ${location}`);
        res.json({ location })
      })
      .catch(error => console.log(error));
  }
}
