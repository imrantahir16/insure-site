import React from "react";

const Feature = (props) => {
  return (
    <li className="py-2">
      <div className="flex items-center sm:justify-start justify-center py-4 px-4">
        <img src={props.icon} alt={props.alt} />
      </div>
      <h2 className="sm:text-left font-medium font-heading text-2xl text-brandNeutral-300 py-4 px-4">
        {props.title}
      </h2>
      <p className="sm:text-left text-brandNeutral-200 py-2 px-4">
        {props.desc}
      </p>
    </li>
  );
};

export default Feature;
