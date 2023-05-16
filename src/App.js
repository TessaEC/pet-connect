import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/Landing-page';
import Login from './components/Login';
import NewPost from './components/New-post';
import PetCare from './components/Pet-care';
import Shelter from './components/Shelter';
import Donations from './components/Donations';

import './App.css';
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/pet-care" component={PetCare} />
        <Route path="/shelter" component={Shelter} />
        <Route path="/donations" component={Donations} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
