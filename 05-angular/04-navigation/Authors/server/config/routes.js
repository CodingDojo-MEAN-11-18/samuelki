const authorController = require('../controllers/authors');

module.exports = function(app) {
  app.get('/authors', authorController.index);
  app.get('/authors/:id', authorController.show);
  app.post('/authors', authorController.create);
  app.put('/authors/:id', authorController.edit);
  app.delete('/authors/:id', authorController.delete);
}
