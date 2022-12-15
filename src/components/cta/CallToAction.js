import ctaPatternMob from "../../assets/bg-pattern-how-we-work-mobile.svg";
import ctaPatternDesk from "../../assets/bg-pattern-how-we-work-desktop.svg";
const CallToAction = () => {
  return (
    <div className="bg-primary-200 mx-4 sm:mx-10 md:mx-24 py-8 sm:py-14 mb-32 relative flex flex-col sm:flex-row sm:px-12 items-center gap-8 overflow-hidden justify-between">
      <img
        className="absolute top-0 right-0 pointer-events-none sm:hidden"
        src={ctaPatternMob}
        alt=""
      />
      <img
        className="absolute top-0 right-0 pointer-events-none hidden sm:block"
        src={ctaPatternDesk}
        alt=""
      />
      <h1 className="leading-none text-[2.8rem] font-heading text-brandNeutral-100 z-10">
        Find out more about how we work
      </h1>
      <a
        href="#how-we-work"
        className="self-center font-normal text-brandNeutral-100 border py-2 px-4 hover:text-primary-200 hover:bg-brandNeutral-100 uppercase my-8 z-10"
      >
        How we work
      </a>
    </div>
  );
};

export default CallToAction;
