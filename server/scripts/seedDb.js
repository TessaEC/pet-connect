// const mongoose = require('mongoose');
// const Pet = require('../models/pet.js');

// const petSeeds = require('../db/seeds/petsSeed.json');

// require('dotenv').config();

// const {USER, PASSWORD} = process.env;

// mongoose
//   .connect(`mongodb://${USER}:${PASSWORD}@localhost:27017/mydatabase`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// const seedPets = async () => {
//   await Pet.deleteMany({});
//   await Pet.insertMany(petSeeds);
// };

// seedPets()
// .then(() => {
//   mongoose.connection.close();
// })
// .catch((error) => {
//   console.error('Failed to Seed Pet Data to Database', error);
//   mongoose.connection.close();
// });