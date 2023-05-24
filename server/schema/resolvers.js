const { AuthenticationError } = require('apollo-server-express');
const { Shelter, Pet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    shelters: async () => {
      return await Shelter.find();
    },
    pets: async () => {
      return await Pet.find();
    },  
  },

  Mutation: {
    addShelter: async (parent, { shelterName, city, phone, email, password }) => {
      const shelter = await Shelter.create({ shelterName, city, phone, email, password });
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
    addPet: async (parent, { petName, type, age, breed, sex, furColor, image, status, shelterId }) => {
      const pet = await Pet.create({ petName, type, age, breed, sex, furColor, image, status });
      await Shelter.findOneAndUpdate(
        { _id: shelterId },
        { $addToSet: { pets: pet._id } }
      );
      return pet;
    },
    removePet: async (parent, { petId }) => {
      if (petId) {
        const pet = await Pet.findByIdAndDelete({ petId });
        return pet;
      }
    },
    updatePet: async (parent, { petId, petName, type, age, sex, furColor, image, status }) => {
      if (petId) {
        const pet = await Pet.findByIdAndUpdate(
          { petId },
          { petName, type, age, sex, furColor, image, status },
          { new: true }
        );
        return pet;
      }
    },
  },
};

module.exports = resolvers;
