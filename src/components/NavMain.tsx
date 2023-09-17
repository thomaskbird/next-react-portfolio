import * as React from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from "next/link";

interface NavMainProps {
  onToggleMobileNav(): void;
  onCloseMobileNav(): void;
}

const NavMain = ({ onToggleMobileNav, onCloseMobileNav }: NavMainProps) => {
  return (
    <div className="NavMainWrapper">
      <div className="MobileIcon" onClick={() => onToggleMobileNav()}>
        {/* <FontAwesomeIcon icon="bars" /> */}
      </div>
      <ul>
        <li>
          <Link href="/">
            <a onClick={() => onCloseMobileNav()}>
              {/* <FontAwesomeIcon icon="home" />  */}
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/list/portfolio">
            <a onClick={() => onCloseMobileNav()}>
              {/* <FontAwesomeIcon icon="briefcase" />  */}
              Work
            </a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a onClick={() => onCloseMobileNav()}>
              {/* <FontAwesomeIcon icon="list-alt" />  */}
              Services
            </a>
          </Link>
        </li>
        <li>
          <Link href="/list/blog">
            <a onClick={() => onCloseMobileNav()}>
              {/* <FontAwesomeIcon icon="book" />  */}
              Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <a onClick={() => onCloseMobileNav()}>
              {/* <FontAwesomeIcon icon="file" />  */}
              Resume
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a onClick={() => onCloseMobileNav()}>
              {/* <FontAwesomeIcon icon="envelope" />  */}
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMain;
