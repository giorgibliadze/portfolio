//links
import Link from "next/link";

//icons
import {
  RiGitlabFill,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

import { FaLinkedin } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/giorgibliadze"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaGithub />
      </Link>
      <Link
        href={"https://gitlab.com/bliadze1997"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGitlabFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/giorgi-bliadze-040413145/"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaLinkedin />
      </Link>
      <Link
        href={"https://www.facebook.com/bliadze1997"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;
