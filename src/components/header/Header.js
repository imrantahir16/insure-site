import React from "react";
import logo from "./../../assets/logo.svg";
import hamburgerIcon from "./../../assets/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="sm:mx-10 md:mx-24 px-5 py-6 flex justify-between items-center">
      <a href="#home" className="cursor-pointer">
        <img src={logo} alt="brand logo" />
      </a>
      <div className="hidden sm:block">
        <ul className="uppercase text-brandNeutral-200 flex gap-4 ">
          <li>
            <a
              href="#how-we-work"
              className="cursor-pointer hover:text-primary-200"
            >
              how we work
            </a>
          </li>
          <li>
            <a href="#blog" className="cursor-pointer hover:text-primary-200">
              blog
            </a>
          </li>
          <li>
            <a
              href="#account"
              className="cursor-pointer hover:text-primary-200"
            >
              account
            </a>
          </li>
          <li>
            <a
              href="#view-plan"
              className="border border-brandNeutral-300 text-brandNeutral-300 px-4 py-2 cursor-pointer hover:bg-primary-200 hover:text-brandNeutral-100"
            >
              View plans
            </a>
          </li>
        </ul>
      </div>
      <a href="#menu" className="cursor-pointer sm:hidden">
        <img src={hamburgerIcon} alt="hamburger icon" />
      </a>
    </header>
  );
};

export default Header;
