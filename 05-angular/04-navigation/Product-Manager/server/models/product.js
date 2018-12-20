const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Product name required'],
    minlength: [4, 'Product name must be at least 4 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price required']
  },
  image: String
});

module.exports = mongoose.model('Product', ProductSchema);
