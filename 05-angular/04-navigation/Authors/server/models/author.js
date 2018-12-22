const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name required'],
    minlength: [3, 'Name must be at least 3 characters long']
  },
  quotes: [
    {
      quote: {
        type: String,
        minlength: [3, 'Quote must be at least 3 characters long']
      },
      votes: {
        type: Number,
        default: 0
      }
    }
  ]
});

module.exports = mongoose.model('Author', AuthorSchema);
