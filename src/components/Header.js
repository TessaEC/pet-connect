import React from "react";
import '../App.css'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header classname="app-header">
            <h1>Pet-Connect</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Login" activeClassName="active">
                            Login
                        </NavLink>
                    </li>
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

export default Header;