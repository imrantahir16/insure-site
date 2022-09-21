import React from "react";

const Feature = (props) => {
  return (
    <li>
      <img src={props.icon} alt={props.alt} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  );
};

export default Feature;
