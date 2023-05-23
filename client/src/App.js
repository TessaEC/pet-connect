import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/Landing-page';
import Login from './components/Login';
import Shelter from './components/Shelter';
import AvailablePets from './components/Available-pets';
import PetCare from './components/Pet-care';
import './App.css';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Header />
        <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Login />} />
         <Route path="/shelter" element={<Shelter />} />
         <Route path='/Petcare' element={<PetCare />} />
         <Route path="/AvailablePets" element={<AvailablePets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}
