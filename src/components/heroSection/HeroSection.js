import React from "react";
import heroImageMobile from "./../../assets/image-intro-mobile.jpg";
import heroImageDesktop from "./../../assets/image-intro-desktop.jpg";
import leftPatternMobile from "../../assets/bg-pattern-intro-left-mobile.svg";
import rightPatternMobile from "../../assets/bg-pattern-intro-right-mobile.svg";
import leftPatternDesk from "../../assets/bg-pattern-intro-left-desktop.svg";
import rightPatternDesk from "../../assets/bg-pattern-intro-right-desktop.svg";

const HeroSection = () => {
  return (
    <div className="bg-primary-200 font-body mb-16">
      <img
        className="absolute top-18 right-0 pointer-events-none hidden sm:block z-10"
        src={rightPatternDesk}
        alt=""
      />
      <picture className="sm:absolute top-28 right-28 w-96 h-auto">
        <source srcSet={heroImageDesktop} media="(min-width: 600px)" />
        <img src={heroImageMobile} alt="Man and woman with their kids" />
      </picture>
      <div className="py-24 px-6 text-brandNeutral-100 relative">
        <img
          className="absolute top-0 left-0 pointer-events-none sm:hidden"
          src={leftPatternMobile}
          alt=""
        />
        <img
          className="absolute top-0 left-0 pointer-events-none hidden sm:block"
          src={leftPatternDesk}
          alt=""
        />
        <img
          className="absolute bottom-[-175px] right-0 pointer-events-none sm:hidden"
          src={rightPatternMobile}
          alt=""
        />
        <div className="sm:mx-10 md:mx-24 sm:text-left sm:max-w-xl">
          <h1 className="font-heading text-[2.8rem] leading-none mb-6">
            Humanizing your insurance.
          </h1>
          <p className="mb-10">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a
            href="#view-plan"
            className="px-6 py-2 border-2 uppercase cursor-pointer hover:bg-brandNeutral-100 hover:text-primary-200 font-semibold"
          >
            View plans
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
