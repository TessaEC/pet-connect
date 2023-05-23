import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing user session)
    
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login screen after logout
  };

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
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <NavLink exact to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
          )}
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


