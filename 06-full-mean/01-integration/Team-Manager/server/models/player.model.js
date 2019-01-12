const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Player name required'],
    minlength: [2, 'Name must contain at least 2 characters']
  },
  position: String,
  status: {
    type: String,
    default: 'undecided'
  }
});

module.exports = mongoose.model('Player', PlayerSchema);
