import React from 'react';
import ShelterCard from './shelter-card';

export default function Shelter() {
  // Assuming you have the shelter data available
  const shelter = {
    shelterName: 'Nashville Pet Clinic',
    email: 'NashvillePetClinic@gmail.com',
    city: 'Nashville',
    phone: '1-165-258-0044'
  };

  return (
    <div className='shelter-card'>
      <h2>Shelters</h2>
      <p>Here you can find information about animal shelters.</p>
      <br></br>
      <ShelterCard shelter={shelter} />
    </div>
  );
}
