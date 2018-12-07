const bookController = require('../controllers/books');

module.exports = function(app) {
  app.get('/authors', bookController.index);
  app.get('/author/:id', bookController.show);
  app.post('/newauthor', bookController.createAuthor);
  app.post('/newbook', bookController.createBook);
  app.put('/author/:id/update', bookController.update);
  app.delete('/author/:id', bookController.destroyAuthor);
  app.delete('/book/:id', bookController.destroyBook);
};
