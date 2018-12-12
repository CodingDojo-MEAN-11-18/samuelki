const cakeController = require('../controllers/cakes');
const reviewController = require('../controllers/reviews');

module.exports = function(app) {
  app.get('/cakes', cakeController.index);
  app.get('/cakes/:id', cakeController.show);
  app.post('/cakes', cakeController.create);
  app.post('/reviews/:id', reviewController.create);
}
