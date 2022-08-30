import react, { useEffect, useContext } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItems as navItems } from '~/utils/Navitems'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

const COMPONENT_NAME = 'IconNavbar';

interface IconNavbarBaseProps {
  isLoading: boolean
}

const IconNavbarBase = ({ isLoading }: IconNavbarBaseProps) => {
  const router = useRouter()
  const { asPath } = router

  useEffect(() => console.log('isLoading', isLoading), [isLoading]);

  return (
    <div className={`${COMPONENT_NAME}`}>
      <div className={`${COMPONENT_NAME}__inner`}>
        {navItems.map(item => (
          <Link key={item.id} href={item.tgt}>
            <a className={`animated ${item.tgt === asPath ? 'active' : ''}`}>
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
};

const mapStateToProps = (state: any) => ({
  isLoading: state.general.isLoading
})

const IconNavbar = connect(mapStateToProps)(IconNavbarBase);

export default IconNavbar;
