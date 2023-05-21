import React, { useState } from "react";
import '../App.css';
import '../pet-card.css'

const PetCard = ({ pets }) => {
  const { name, type, breed, age, sex, furColor, status } = pets;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`pet-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-front">
      <p>Status: {status}</p>
      {/* {will need to add image here } */}
      <div className="card-back">
      <h3>{name}</h3>
        <p>Type: {type}</p>
        {type === 'dog' ? <p>Breed: {breed}</p> : null}
        <p>Age: {age}</p>
        <p>Sex: {sex}</p>
        <p>Color: {furColor}</p>
      </div>
      </div>
    </div>
  );
}

export default PetCard;
