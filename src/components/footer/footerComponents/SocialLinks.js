import React from "react";
import facebook from "./../../../assets/icon-facebook.svg";
import twitter from "./../../../assets/icon-twitter.svg";
import pinterest from "./../../../assets/icon-pinterest.svg";
import instagram from "./../../../assets/icon-instagram.svg";
import Socials from "./Socials";

const socials = [
  {
    id: "s001",
    icon: facebook,
    alt: "facebook icon",
    link: "www.facebook.com",
  },
  {
    id: "s002",
    icon: twitter,
    alt: "twitter icon",
    link: "www.twitter.com",
  },
  {
    id: "s003",
    icon: pinterest,
    alt: "pinterest icon",
    link: "www.pinterest.com",
  },
  {
    id: "s004",
    icon: instagram,
    alt: "instagram icon",
    link: "www.instagram.com",
  },
];
const SocialLinks = () => {
  return (
    <ul className="flex gap-3">
      {socials.map((social) => (
        <Socials key={social.id} icon={social.icon} link={social.link} />
      ))}
    </ul>
  );
};

export default SocialLinks;
