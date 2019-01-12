const router = require('express').Router();
const playerRouter = require('./player.route');

module.exports = router.use('/api/players', playerRouter);
