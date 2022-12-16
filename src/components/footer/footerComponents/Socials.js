// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Socials = (props) => {
  return (
    <li>
      <a href={props.link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="text-brandNeutral-200 cursor-pointer hover:text-primary-200"
          icon={props.icon}
          fontSize="1.5rem"
          alt={props.alt}
        />
      </a>
    </li>
  );
};

export default Socials;
