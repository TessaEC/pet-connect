import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_SHELTER } from '../utils/mutations';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shelterName, setShelterName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const navigate = useNavigate();
  const [loginUser] = useMutation(LOGIN_USER);
  const [addShelter] = useMutation(ADD_SHELTER);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShelterNameChange = (e) => {
    setShelterName(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleToggleSignUp = () => {
    setIsSigningUp(!isSigningUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSigningUp) {
        console.log('Signup submitted');

        const { data } = await addShelter({
          variables: {
            shelterName: shelterName,
            email: email,
            password: password,
            city: city,
            phone: phone,
          },
        });

        // Handle the response data after signup
        console.log('Signup response:', data);
      } else {
        console.log('Login submitted');
        const { data } = await loginUser({
          variables: {
            email,
            password,
          },
        });

        // Handle the response data after login
        console.log('Login response:', data);
      }

      console.log('Email:', email);
      console.log('Password:', password);

      // Redirect to shelter dashboard after login or signup
      navigate('/dashboard');
    } catch (error) {
      // Handle any errors that occurred during login or signup
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>{isSigningUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {isSigningUp && (
          <>
            <div>
              <label htmlFor="shelterName">Shelter Name:</label>
              <input
                type="text"
                id="shelterName"
                value={shelterName}
                onChange={handleShelterNameChange}
              />
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={handleCityChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
          </>
        )}
        <button type="submit">{isSigningUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <p>
        {isSigningUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button type="button" onClick={handleToggleSignUp}>
          {isSigningUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}


