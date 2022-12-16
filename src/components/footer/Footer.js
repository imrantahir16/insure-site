import React from "react";
import logo from "./../../assets/logo.svg";
import CompanyLinks from "./footerComponents/CompanyLinks";
import ContactLinks from "./footerComponents/ContactLinks";
import HelpingLinks from "./footerComponents/HelpingLinks";
import OtherLinks from "./footerComponents/OtherLinks";
import SocialLinks from "./footerComponents/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-brandNeutral-100 bg-footer-pattern-mob sm:bg-footer-pattern-desk bg-no-repeat">
      <div className="sm:mx-10 md:mx-24 ">
        <div className="flex items-center justify-center sm:justify-between sm:flex-row flex-col gap-7 pt-24 pb-12 ">
          <img src={logo} alt="Insure logo" />
          <SocialLinks />
        </div>
        <div className="py-16 sm:flex justify-start sm:gap-28">
          <CompanyLinks />
          <HelpingLinks />
          <ContactLinks />
          <OtherLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
