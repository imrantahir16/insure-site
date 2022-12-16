import Socials from "./Socials";
import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    id: "s001",
    icon: faFacebookSquare,
    alt: "facebook icon",
    link: "www.facebook.com",
  },
  {
    id: "s002",
    icon: faTwitter,
    alt: "twitter icon",
    link: "www.twitter.com",
  },
  {
    id: "s003",
    icon: faPinterest,
    alt: "pinterest icon",
    link: "www.pinterest.com",
  },
  {
    id: "s004",
    icon: faInstagramSquare,
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
