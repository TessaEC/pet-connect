import React, { useState } from "react";
// import ShelterCard from "./shelter-card";
import "../App.css";

export default function PetCard({ pet }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      {/* <div className='shelter-card'>
        <ShelterCard />
      </div> */}
      <div className={`pet-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="card-front">
          <p>{pet.status}</p>
          <img src={pet.image} alt="Pet" />
        </div>
        <div className="card-back">
          <h3>{pet.petName}</h3>
          <p>Type: {pet.type}</p>
          {pet.type === 'dog' ? <p>Breed: {pet.breed}</p> : null}
          <p>Age: {pet.age}</p>
          <p>Sex: {pet.sex}</p>
          <p>Color: {pet.furColor}</p>
          <p>Shelter: {pet.shelterName}</p>
        </div>
      </div>
    </div>
  );
}
