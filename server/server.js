const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');

const { typeDefs, resolvers } = require('./schema');
const { authMiddleware } = require('./utils/auth');

const fs = require('fs');

const petSeedData = require('./seeds/petSeed.js');
const shelterSeedData = require('./seeds/shelterSeed.js');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// Define your API endpoints
app.get('/availablepets', (req, res) => {
    // Return the seed data
    res.json(petSeedData && shelterSeedData);
  });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//create a new instance of ApolloServer with the graphQL schema
const startApolloServer = async(typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
}

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
}
);

//call the async function to start the server
startApolloServer(typeDefs, resolvers);