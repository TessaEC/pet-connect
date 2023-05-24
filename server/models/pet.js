const {Schema, model} = require('mongoose');

const petSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: false
  },
  petName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    required: false
  },
  furColor: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: false
  },
});

const Pet = model('Pet', petSchema);

module.exports = Pet;