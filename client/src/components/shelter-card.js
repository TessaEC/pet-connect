import React from 'react';
import '../App.css';

export default function ShelterCard({ shelter }) {

    return (
        <div>
        <div className="shelter-card">
            <h3>{shelter.shelterName}</h3>
            <p>{shelter.email}</p>
            <p>{shelter.city}</p>
            <p>{shelter.phone}</p>
            </div>
        </div>
    );
}

