const restfulTaskAPI = require('../controllers/tasks');

module.exports = function(app) {
  app.get('/tasks', restfulTaskAPI.index);
  app.get('/:id', restfulTaskAPI.show);
  app.post('/task', restfulTaskAPI.create);
  app.put('/:id', restfulTaskAPI.update);
  app.delete('/:id', restfulTaskAPI.destroy);
};
