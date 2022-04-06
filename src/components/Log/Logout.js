import React from "react";
import LogoNav from "../../assets/1250988.png";

function Logout() {
    const logout = () => {
        localStorage.clear();
        window.location = "/";
    }
  return (
    <li onClick={logout}>
      <img src={LogoNav} alt="logout" />
    </li>
  );
}

export default Logout;
