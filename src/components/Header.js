import React from "react";
import '../App.css'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="app-header">
            <h1>Pet-Connect</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active" className='navStyle'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Login" activeClassName="active">
                            Login
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink exact to="/PetCare" activeClassName="active">
                            Pet Care
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Shelter" activeClassName="active">
                            Shelter
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        );
}
