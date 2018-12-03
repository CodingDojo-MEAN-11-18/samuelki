const mongoose = require('mongoose');
const { Schema } = mongoose;

const otterSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('Otter', otterSchema);