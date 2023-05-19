import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './components/Landing-page';
import Login from './components/Login';
import Mission from './components/Mission';
import PetCare from './components/Pet-care';
import Shelter from './components/Shelter';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/Mission" element={<Mission />} />
         <Route path="/pet-care" element={<PetCare />} />
         <Route path="/shelter" element={<Shelter />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;