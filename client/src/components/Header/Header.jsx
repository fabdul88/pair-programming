import React from "react";
import ambulance from "../../assets/ambulance.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__div">
        <img className="header__logo-image" src={ambulance} alt="" />
      </div>
      <div className="header__logo">Ambulance App</div>
    </div>
  );
};

export default Header;
