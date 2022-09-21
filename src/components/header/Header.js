import React from "react";
import logo from "./../../assets/logo.svg";
import hamburgerIcon from "./../../assets/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="px-5 py-6 flex justify-between items-center">
      <a href="#home" className="cursor-pointer">
        <img src={logo} alt="brand logo" />
      </a>
      <a href="#menu" className="cursor-pointer">
        <img src={hamburgerIcon} alt="hamburger icon" />
      </a>
    </header>
  );
};

export default Header;
