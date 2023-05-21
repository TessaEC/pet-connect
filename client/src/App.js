import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/Landing-page';
import Login from './components/Login';
import Shelter from './components/Shelter';
import AvailablePets from './components/Available-pets';
import PetCare from './components/Pet-care';
import './App.css';
import './pet-card.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/Petcare" element={<PetCare />} />
         <Route path="/shelter" element={<Shelter />} />
         <Route path='/petcare' element={<PetCare />} />
         <Route path="/availablepets" element={<AvailablePets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
