import React from "react";

const HelpingLinks = () => {
  return (
    <div>
      <p className="text-brandNeutral-200 uppercase font-medium pt-10 pb-4">
        Help me
      </p>
      <ul className="flex gap-2 flex-col uppercase font-medium text-sm text-brandNeutral-300">
        <li>
          <a href="#faq">Faq</a>
        </li>
        <li>
          <a href="#term-of-use">Terms of use</a>
        </li>
        <li>
          <a href="#privacy-policy">Privacy policy</a>
        </li>
        <li>
          <a href="#cookies">Cookies</a>
        </li>
      </ul>
    </div>
  );
};

export default HelpingLinks;
