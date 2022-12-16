import React from "react";

const OtherLinks = () => {
  return (
    <div className="sm:text-left">
      <p className="text-brandNeutral-200 uppercase font-medium pt-10 pb-4">
        Others
      </p>
      <ul className="flex gap-2 flex-col uppercase font-medium text-sm text-brandNeutral-300">
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#press">Press</a>
        </li>
        <li>
          <a href="#licenses">Licenses</a>
        </li>
      </ul>
    </div>
  );
};

export default OtherLinks;
