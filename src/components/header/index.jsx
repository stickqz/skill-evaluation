import React from "react";
import "./index.css";
import { logo } from "../../assets/png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" className="header-logo" />
      <div className="header-user">
        <div className="profile">
          <img
            className="image"
            alt="profile_image"
            src="https://c.animaapp.com/YPlpdKwz/img/dsc-0848-2-2-5@2x.png"
          />
          <div className="text-wrapper">Siddharth Jain</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
