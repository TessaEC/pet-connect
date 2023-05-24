import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PET } from '../utils/mutations'; // Import the ADD_PET mutation from your mutations file

const Dashboard = () => {
  const [petData, setPetData] = useState({
    petName: '',
    type: '',
    breed: '',
    age: '',
    sex: '',
    furColor: '',
    //image: '',
    status: '',
    shelterName: ''
  });

  const [addPet] = useMutation(ADD_PET);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPet({ variables: petData })
      .then((response) => {
        // Handle success
        console.log('New pet added:', response.data.addPet);
        // Reset the form
        setPetData({
          petName: '',
          type: '',
          breed: '',
          age: '',
          sex: '',
          furColor: '',
          //image: '',
          status: '',
          shelterName: ''
        });
      })
      .catch((error) => {
        // Handle error
        console.error('Error adding pet:', error);
      });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pet Name:
          <input type="text" name="petName" value={petData.petName} onChange={handleInputChange} />
        </label>
        <label>
          Type:
          <input type="text" name="type" value={petData.type} onChange={handleInputChange} />
        </label>
        <label>
          Breed:
          <input type="text" name="breed" value={petData.breed} onChange={handleInputChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={petData.age} onChange={handleInputChange} />
        </label>
        <label>
          Sex:
          <input type="text" name="sex" value={petData.sex} onChange={handleInputChange} />
        </label>
        <label>
          Fur Color:
          <input type="text" name="furColor" value={petData.furColor} onChange={handleInputChange} />
        </label>
        {/* <label>
          Image:
          <input type="text" name="image" value={petData.image} onChange={handleInputChange} />
        </label> */}
        <label>
          Status:
          <input type="text" name="status" value={petData.status} onChange={handleInputChange} />
        </label>
        <label>
          Shelter Name:
          <input type="text" name="shelterName" value={petData.shelterName} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default Dashboard;
