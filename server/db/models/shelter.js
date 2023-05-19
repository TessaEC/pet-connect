const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  createdPost: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  hooks: {
    beforeCreate: async (newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },
  },
});

const Shelter = mongoose.model('pets', shelterSchema);

module.exports = Shelter;