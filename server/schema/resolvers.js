const { AuthenticationError } = require('apollo-server-express');
const { Shelter, Pet } = require('../models');
const { signToken } = require('../utils/auth');
const fs = require('fs');

const resolvers = {
    Query: {
        shelters: async () => {
            return Shelter.find();
        },
        getPetSeedData: () => {
            // Read the petSeed.json file
            const petSeedData = fs.readFileSync('./seeds/petSeed.js', 'utf8');
      
            // Parse the JSON data
            const parsedPetSeedData = JSON.parse(petSeedData);
      
            // Return the parsed data
            return parsedPetSeedData;
          },
          getShelterSeedData: () => {
            // Read the shelterSeed.json file
            const shelterSeedData = fs.readFileSync('./seeds/shelterSeed.js', 'utf8');
      
            // Parse the JSON data
            const parsedShelterSeedData = JSON.parse(shelterSeedData);
      
            // Return the parsed data
            return parsedShelterSeedData;
          },
        },


    Mutation: {
        addShelter: async (parent, { email, password }) => {
            const shelter = await Shelter.create({ email, password });
            const token = signToken(shelter);
            return { token, shelter };
        },
        login: async (parent, { email, password }) => {
            const shelter = await Shelter.findOne({ email });
            if (!shelter) {
                throw new AuthenticationError('No profile with this email found!');
            }
            const correctPw = await shelter.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
            const token = signToken(shelter);
            return { token, shelter };
        },
        addPet: async (parent, { name, type, age, description, image, shelterId }) => {
            const pet = await Pet.create({ name, type, age, description, image });
            await Shelter.findOneAndUpdate(
                { _id: shelterId },
                { $addToSet: { pets: pet._id } }
            );
            return pet;
        },
        removePet: async (parent, { petId }) => {
            if (petId) {
                const pet = await Pet.findByIdAndDelete(
                    { _id: petId }
                );
                return pet;
            }
        },
        updatePet: async (parent, { petId, name, type, age, description, image }) => {
            if (petId) {
                const pet = await Pet.findByIdAndUpdate(
                    { _id: petId },
                    { name, type, age, description, image },
                    { new: true }
                );
                return pet;
            }
        }
    }
};

module.exports = resolvers;