const mongoose = require('mongoose');
const { Schema } = mongoose;

const locationSchema = new Schema({
  name: String,
  range: []
});

module.exports = mongoose.model('Location', locationSchema);
