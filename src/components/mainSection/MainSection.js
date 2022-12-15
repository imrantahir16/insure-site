import React from "react";
import FeatureList from "./FeatureList";

const MainSection = () => {
  return (
    <section className="sm:mx-10 md:mx-24 pt-16 mb-32">
      <h1 className="text-[2.8rem] font-medium font-heading text-brandNeutral-300 py-6">
        We're different
      </h1>
      <FeatureList />
    </section>
  );
};

export default MainSection;
