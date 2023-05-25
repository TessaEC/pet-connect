import React from "react";
// import ShelterCard from "./shelter-card";
import "../cards.css";
import contract from '../asssets/contract.pdf';
export default function PetCard({ pet }) {
  // const [isFlipped, setIsFlipped] = useState(false);
  // const handleClick = () => {
  //   setIsFlipped(!isFlipped);
  // };
  return (
<div className='pet-card'>
  <div className="flip-card-container" style={{ "--hue": 220 }}>
    <div className="flip-card">
      <div className="card-front">
        <figure>
          <div className="img-bg"></div>
          <img src={pet.image} alt="pet" />
          <figcaption>{pet.petName}</figcaption>
        </figure>
        <ul className="petCardUL">
          <li>Nashville Pet Clinic</li>
          <li>City: Nashville</li>
          <li>Phone:1-165-258-0044 </li>
          <li>Email: NashvillePetClinic@gmail.com</li>
        </ul>
      </div>
      <div className="card-back">
        <figure>
          <div className="img-bg"></div>
          <img src={pet.image} alt="pet" />
        </figure>
        <ul className="petCardUL">
          <li>breed: {pet.breed}</li>
          <li>age: {pet.age}</li>
          <li>sex: {pet.sex}</li>
          <li>color: {pet.furColor}</li>

        </ul>
        <a className="anchor-style" href={contract} download>Adoption Form</a>
        <div className="design-container">
          <span className="design design--1"></span>
          <span className="design design--2"></span>
          <span className="design design--3"></span>
          <span className="design design--4"></span>
          <span className="design design--5"></span>
          <span className="design design--6"></span>
          <span className="design design--7"></span>
          <span className="design design--8"></span>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}