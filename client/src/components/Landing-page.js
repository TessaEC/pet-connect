import React from 'react';
import '../App.css';
import AvailablePets from './AvailablePets';

export default function LandingPage() {
  return (
    <div>
      <h2>Mission Statement</h2>
      <p>Two struggling Web Develepors trying to help dogs and cats find their Fur-ever Home!</p>
      <p>We are Tess and John two Vanderbilt Coding Students who are working on honing our skills on a app that fulfills a need in our local communities <br></br> for matching users with a dog or cat </p>
         <div><AvailablePets /></div>
    </div>
  );
}
