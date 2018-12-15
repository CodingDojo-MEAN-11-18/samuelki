const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  rating: Number,
  comment: String,
  cake: {
    type: Schema.Types.ObjectId,
    ref: 'Cake'
  }
});

module.exports = mongoose.model('Review', ReviewSchema);
