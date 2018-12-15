const mongoose = require('mongoose');
const { Schema } = mongoose;

const CakeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Baker name required']
  },
  image: {
    type: String,
    required: [true, 'Image URL required']
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
}, {timestamp: true});

module.exports = mongoose.model('Cake', CakeSchema);
