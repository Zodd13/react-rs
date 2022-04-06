import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import LogoNav from "../assets/1250988.png";
import { useSelector } from "react-redux";
import Logo from "../assets/icon-left-font-monochrome-black.svg";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

function Navbar() {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>Bienvenue {userData.username}</h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <NavLink exact to="/profil">
              <img src={LogoNav} alt="logout" />
            </NavLink>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
