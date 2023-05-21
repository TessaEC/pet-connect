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
                        <NavLink exact to="/" activeClassName="active">
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
                        <NavLink exact to="/petcare" activeClassName="active">
                            Pet Care
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/availablepets" activeClassName="active">
                            Available Pets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Shelter" activeClassName="active">
                            Shelters
                        </NavLink>
                    </li>
            
                </ul>
            </nav>
        </header>
        );
}
