const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Shelter {
    _id: ID
    email: String
    password: String
    name: String
    city: String
    phone: String
    pets: [Pet]
}

type Pet {
    _id: ID
    name: String
    type: String
    age: String
    description: String
    image: String
    shelter: Shelter
}

type Auth {
    token: ID!
    shelter: Shelter
}

type Query {
    shelters: [Shelter]
    pets: [Pet]
    shelter(shelterId: ID!): Shelter
    pet(petId: ID!): Pet
    getPetSeedData: [Pet]
    getShelterSeedData: [Shelter]
}

type Mutation {
    addShelter(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPet(name: String!, type: String!, age: String!, description: String!, image: String!, shelterId: ID!): Pet
    removePet(petId: ID!): Pet
    updatePet(petId: ID!, name: String!, type: String!, age: String!, description: String!, image: String!): Pet
}

`;

module.exports = typeDefs;