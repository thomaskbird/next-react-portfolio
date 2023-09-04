import * as React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link'

interface NavMainProps {
  onToggleMobileNav(): void;
  onCloseMobileNav(): void;
}

const NavMain = ({ onToggleMobileNav, onCloseMobileNav }: NavMainProps) => {
  return (
    <div className="NavMainWrapper">
      <div
        className="MobileIcon"
        onClick={() => onToggleMobileNav()}
      >
        {/* <FontAwesomeIcon icon="bars" /> */}
      </div>
      <ul>
        <li>
          <Link href="/" onClick={() => onCloseMobileNav()}>
            {/* <FontAwesomeIcon icon="home" />  */}
            Home
          </Link>
        </li>
        <li>
          <Link href="/list/portfolio" onClick={() => onCloseMobileNav()}>
            {/* <FontAwesomeIcon icon="briefcase" />  */}
            Work
          </Link>
        </li>
        <li>
          <Link href="/services" onClick={() => onCloseMobileNav()}>
            {/* <FontAwesomeIcon icon="list-alt" />  */}
            Services
          </Link>
        </li>
        <li>
          <Link href="/list/blog" onClick={() => onCloseMobileNav()}>
            {/* <FontAwesomeIcon icon="book" />  */}
            Blog
          </Link>
        </li>
        <li>
          <Link href="/resume" onClick={() => onCloseMobileNav()}>
            {/* <FontAwesomeIcon icon="file" />  */}
            Resume
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => onCloseMobileNav()}>
            {/* <FontAwesomeIcon icon="envelope" />  */}
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavMain;
