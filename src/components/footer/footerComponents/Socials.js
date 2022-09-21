import React from "react";

const Socials = (props) => {
  return (
    <li>
      <a href={props.link}>
        <img src={props.icon} alt={props.alt} />
      </a>
    </li>
  );
};

export default Socials;
