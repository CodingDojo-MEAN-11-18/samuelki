const quoteController = require('../controllers/quotes');

module.exports = function(app) {
  app.get('/', quoteController.index);
  app.get('/quotes', quoteController.show);
  app.post('/quotes', quoteController.create);
  app.get('/clear', quoteController.destroy);
}