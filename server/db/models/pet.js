const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  furColor: {
    type: String,
    required: true
  }
});

const Pet = mongoose.model('pets', petSchema);

module.exports = Pet;