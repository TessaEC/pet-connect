import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_PETS } from "../utils/queries";

export default function PetCard({ pet }) {
  
  //useQuery(QUERY_PETS);

  return (
    <div className='pet-card'>
      <div className="card-front">
        <p>{pet.status}</p>
        {/* Add image here using pet.image or any other relevant field */}
        <div className="card-back">
          <h3>{pet.petName}</h3>
          <p>Type: {pet.type}</p>
          {pet.type === 'dog' ? <p>Breed: {pet.breed}</p> : null}
          <p>Age: {pet.age}</p>
          <p>Sex: {pet.sex}</p>
          <p>Color: {pet.furColor}</p>
        </div>
      </div>
    </div>
  );
}

