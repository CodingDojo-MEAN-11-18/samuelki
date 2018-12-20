const productController = require('../controllers/products');

module.exports = function(app) {
  app.get('/products', productController.index);
  app.get('/products/:id', productController.show);
  app.post('/products', productController.create);
  app.put('/products/:id', productController.edit);
  app.delete('/products/:id', productController.delete);
};
