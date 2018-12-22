const authorController = require('../controllers/authors');
const path = require('path');

module.exports = function(app) {
  app.get('/api/authors', authorController.index);
  app.get('/api/authors/:id', authorController.show);
  app.post('/api/authors', authorController.create);
  app.put('/api/authors/:id', authorController.edit);
  app.delete('/api/authors/:id', authorController.delete);

  app.put('/api/authors/:id/quotes/:quoteid', authorController.quoteEdit);
  app.delete('/api/authors/:id/quotes/:quoteid', authorController.quoteDelete);

  app.all('*', (req,res,next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'));
  });
};
