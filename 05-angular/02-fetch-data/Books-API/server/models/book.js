const mongoose = require('mongoose');
const validators = require('mongoose-validators');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Book title required'],
    minlength: [2, 'Book title must be at least 2 characters long']
  },
  year: {
    type: Number,
    required: [true, 'Book publication year required'],
    max: [2018, 'Year cannot be in the future']
  }
});

const authorSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name required'],
    minlength: [2, 'First name must be at least 2 characters long']
  },
  lastName: {
    type: String,
    required: [true, 'Last name required'],
    minlength: [2, 'Last name must be at least 2 characters long']
  },
  country: {
    type: String,
    required: [true, 'Must provied country of origin'],
    minlength: [3, 'Country must be at least 3 characters long']
  },
  birthdate: {
    type: Date,
    required: [true, 'Must provide birthday'],
    validate: validators.isBefore(Date())
  }
});

module.exports = {
  author: mongoose.model('Author', authorSchema),
  book: mongoose.model('Book', bookSchema)
};
