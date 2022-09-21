import React from "react";
import logo from "./../../assets/logo.svg";
import CompanyLinks from "./footerComponents/CompanyLinks";
import ContactLinks from "./footerComponents/ContactLinks";
import HelpingLinks from "./footerComponents/HelpingLinks";
import OtherLinks from "./footerComponents/OtherLinks";
import SocialLinks from "./footerComponents/SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Insure logo" />
        <SocialLinks />
      </div>
      <div>
        <CompanyLinks />
        <HelpingLinks />
        <ContactLinks />
        <OtherLinks />
      </div>
    </footer>
  );
};

export default Footer;
