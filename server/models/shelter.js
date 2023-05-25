const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const shelterSchema = new Schema({
  shelterName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pet'
    }
  ]
});

shelterSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

shelterSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Shelter = model('Shelter', shelterSchema);

//module.exports = Shelter;

module.exports = {
  default: Shelter,
  shelterSchema
}