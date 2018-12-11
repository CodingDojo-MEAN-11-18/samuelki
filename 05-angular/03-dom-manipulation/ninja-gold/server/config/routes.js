const locationController = require('../controllers/locations');

module.exports = function(app) {
  app.get('/locations', locationController.index);
  app.post('/locations', locationController.create);
};
