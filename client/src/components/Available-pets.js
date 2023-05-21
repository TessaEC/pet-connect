import React, { useEffect, useState } from 'react';
import '../App.css';
import PetCard from './Pet-card';

export default function AvailablePets() {

  const [petData, setPetData] = useState([]);

  useEffect(() => {
    fetch('/available-pets')
      .then((response) => response.json())
      .then((data) => setPetData(data));
  }, []);

  return (
    <div>
        {petData.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
  );
}