const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Shelter {
    _id: ID
    email: String
    password: String
    shelterName: String
    city: String
    phone: String
    pets: [Pet]
}

type Pet {
    _id: ID
    petName: String
    type: String
    breed: String
    age: String
    sex: String
    furColor: String
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
    availablePets: [Pet]
}

type Mutation {
    addShelter(shelterName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPet(petName: String!, type: String!, age: String!, furColor: String!, image: String!, shelterId: ID!): Pet
    removePet(petId: ID!): Pet
    updatePet(petId: ID!, petName: String!, type: String!, age: String!, furColor: String!, image: String!): Pet
}

`;

module.exports = typeDefs;