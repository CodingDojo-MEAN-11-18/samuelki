const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
  rating: { type: Number, required: true, minimum: 1, maximum: 5 },
  comment: { type: String, required: false }
});

const cakeSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  rating: [ratingSchema]
}, {timestamp: true});

module.exports = mongoose.model('Cake', cakeSchema);
