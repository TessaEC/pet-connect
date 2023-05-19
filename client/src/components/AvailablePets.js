import React from "react";
import '../App.css';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      {pet.type === 'dog' ? <p>Breed: {pet.breed}</p> : null}
      <p>Age: {pet.age}</p>
      <p>Color: {pet.color}</p>
      {/* Add more pet information as needed */}
    </div>
  );
};

export default function AvailablePets() {
  // Your component logic here
}
