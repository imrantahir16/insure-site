import React from "react";

const ContactLinks = () => {
  return (
    <div className="sm:text-left">
      <p className="text-brandNeutral-200 uppercase font-medium pt-10 pb-4">
        Contact
      </p>
      <ul className="flex gap-2 flex-col uppercase font-medium text-sm text-brandNeutral-300">
        <li>
          <a href="#sales">Sales</a>
        </li>
        <li>
          <a href="#support">Support</a>
        </li>
        <li>
          <a href="#live-chat">Live Chat</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactLinks;
