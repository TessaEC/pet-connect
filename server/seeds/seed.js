const db = require('../config/connection');
const { Shelter, Pet } = require('../models');
const shelterSeedData = require('./shelterSeed.json');
const petSeedData = require('./petSeed.json');

db.once('open', async () => {
    await Shelter.deleteMany({});
    await Pet.deleteMany({});

    await Shelter.insertMany(shelterSeedData);
    await Pet.insertMany(petSeedData);

    console.log('all done!');
    process.exit(0);
});