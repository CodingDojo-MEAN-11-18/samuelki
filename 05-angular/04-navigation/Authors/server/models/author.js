const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name required'],
    minlength: [3, 'Name must be at least 3 characters long']
  }
});

module.exports = mongoose.model('Author', AuthorSchema);
