const router = require('express').Router();

const { playerController } = require('../controllers');

module.exports = router
  .get('/', playerController.index)
  .post('/', playerController.create)
  .delete('/:id', playerController.delete)
  .put('/:id', playerController.update);
