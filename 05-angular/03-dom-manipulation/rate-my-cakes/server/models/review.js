const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  comment: String,
  rating:{
    type: Number,
    required: [true, 'Rating required'],
    minimum: 1,
    maximum: 5
  },
  cake: {
    type: Schema.Types.ObjectId,
    ref: 'Cake'
  }
});

module.exports = mongoose.model('Review', ReviewSchema);
