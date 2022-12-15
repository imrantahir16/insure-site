import React from "react";
import Feature from "./Feature";
import snappyProcess from "./../../assets/icon-snappy-process.svg";
import peopleFirst from "./../../assets/icon-people-first.svg";
import affordablePrice from "./../../assets/icon-affordable-prices.svg";

const features = [
  {
    id: "001",
    icon: snappyProcess,
    alt: "snappy process icon",
    title: "Snappy Process",
    desc: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
  },
  {
    id: "002",
    icon: affordablePrice,
    alt: "affordable price icon",
    title: "Affordable Price",
    desc: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    id: "003",
    icon: peopleFirst,
    alt: "people first icon",
    title: "People First",
    desc: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
  },
];
const FeatureList = () => {
  return (
    <ul className="sm:flex">
      {features.map((feature) => (
        <Feature
          key={feature.id}
          icon={feature.icon}
          alt={feature.alt}
          title={feature.title}
          desc={feature.desc}
        />
      ))}
    </ul>
  );
};

export default FeatureList;
