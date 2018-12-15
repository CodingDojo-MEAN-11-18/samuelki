const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.resolve('server', 'models');
// const reg = new RegExp('\\.js$', 'i');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rate-my-cakes', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('MongoDB Connected'));

// fs.readdirSync(modelsPath).forEach(file => {
//   if (reg.test(file)) {
//     require(path.join(modelsPath, file));
//   }
// });

fs.readdirSync(modelsPath)
  // .filter(file => reg.test(file))
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
