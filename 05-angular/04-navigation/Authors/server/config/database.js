const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const modelsPath = path.resolve('server/models');

mongoose.Promse = global.Promise;
mongoose.connect('mongodb://localhost/authors', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('MongoDB Connected'));

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
