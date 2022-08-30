import React, { useState } from 'react'
import Link from 'next/link'
import { NavItems as navItems } from '~/utils/Navitems'
import { useRouter } from 'next/router'

const COMPONENT_NAME = 'Navbar'

const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()
  const { asPath } = router

  return (
    <div className={`${COMPONENT_NAME}`}>
      <div className={`${COMPONENT_NAME}__inner container`}>
        <div className={`${COMPONENT_NAME}__logo`}>
          <Link href="/">
            <h1>Thomas Bird</h1>
          </Link>

          <button
            className={`${COMPONENT_NAME}__mobile-menu-btn`}
            onClick={() => setIsOpen(!isOpen)}
          >
            =
          </button>
        </div>
        <div className={`${COMPONENT_NAME}__nav ${isOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map(navItem => (
              <li key={navItem.id}>
                <Link href={navItem.tgt}>
                  <a className={`${asPath === navItem.tgt ? 'active' : ''} animated`} onClick={() => setIsOpen(false)}>
                    {navItem.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
