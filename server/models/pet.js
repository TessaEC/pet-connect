const {Schema, model} = require('mongoose');

const petSchema = new Schema({
  type: {
    type: String,
    required: true
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
    required: true
  },
  furColor: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
});

const Pet = model('Pet', petSchema);

module.exports = Pet;