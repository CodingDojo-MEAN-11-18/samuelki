const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  content: {
    type: String,
    require: [true, 'Note required'],
    minlength: [3, 'Note must be at least 3 characters long']
  }
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);
