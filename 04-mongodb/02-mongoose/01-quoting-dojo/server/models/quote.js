const mongoose = require('mongoose');
const { Schema } = mongoose;

const quoteSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name required']
  },
  quote: {
    type: String,
    required: [true, 'Quote required']
  }
}, {timestamps: true});

module.exports = mongoose.model('Quote', quoteSchema);