import React from 'react';
import { useQuery } from '@apollo/client';
import '../App.css';
import PetCard from './Pet-card';
import { QUERY_PETS } from '../utils/queries';

export default function AvailablePets() {
  const { loading, error, data } = useQuery(QUERY_PETS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const petData = data.availablePets;

  return (
    <div>
      {petData.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}


