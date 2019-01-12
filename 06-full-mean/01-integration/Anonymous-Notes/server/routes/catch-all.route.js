const router = require('express').Router();
const path = require('path');

module.exports = router
  .all('*', function(req, res) {
    res.sendFile(path.resolve('anonymous-notes/dist/anonymous-notes/index.html'));
  });
