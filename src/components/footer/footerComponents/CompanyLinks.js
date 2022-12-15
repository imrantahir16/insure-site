import React from "react";

const CompanyLinks = () => {
  return (
    <div>
      <p className="text-brandNeutral-200 uppercase font-medium pt-10 pb-4">
        Our Company
      </p>
      <ul className="flex gap-2 flex-col uppercase font-medium text-sm text-brandNeutral-300">
        <li>
          <a href="#how-we-work">How we work</a>
        </li>
        <li>
          <a href="#why-insure">Why Insure?</a>
        </li>
        <li>
          <a href="#check-price">Check Price</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
      </ul>
    </div>
  );
};

export default CompanyLinks;
