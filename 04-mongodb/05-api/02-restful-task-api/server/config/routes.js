const restfulTaskAPI = require('../controllers/tasks');

module.exports = function(app) {
  app.get('/', restfulTaskAPI.index);
  app.get('/:id', restfulTaskAPI.show);
  app.post('/:title/:description/:completed', restfulTaskAPI.create);
  app.put('/:id/:title/:description/:completed', restfulTaskAPI.update);
  app.delete('/:id', restfulTaskAPI.destroy);
};