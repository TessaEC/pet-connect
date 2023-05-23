import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "../utils/mutations";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [logoutUser] = useMutation(LOGOUT_USER);

  const handleLogout = async () => {
    try {
      await logoutUser();

      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
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
          {isLoggedIn ? (
          <li>
            <NavLink exact to="/dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          ) : null}
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


