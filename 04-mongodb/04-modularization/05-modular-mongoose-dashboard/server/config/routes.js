const otterController = require('../controllers/otters');

module.exports = function(app) {
  app.get('/', otterController.index);
  app.get('/otters/new', otterController.new);
  app.get('/otters/:id', otterController.show);
  app.post('/otters', otterController.create);
  app.get('/otters/edit/:id', otterController.edit);
  app.post('/otters/:id', otterController.update);
  app.get('/otters/destroy/:id', otterController.destroy);
};