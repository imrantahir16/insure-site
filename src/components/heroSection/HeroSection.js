import React from "react";
import heroImage from "./../../assets/image-intro-mobile.jpg";

const HeroSection = () => {
  return (
    <div>
      <img src={heroImage} alt="Man and woman with their kids" />
      <div>
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <a href="#view-plan">View plans</a>
      </div>
    </div>
  );
};

export default HeroSection;
