import React, { ReactElement } from 'react';

const COMPONENT_NAME = 'Footer'

const Footer = (): ReactElement => {
  const isTop = true;
  const dateObj = new Date();

  return (
    <div className={`container-outer footer animate-height ${isTop && 'hide'}`}>
      <div className="container-inner">
        <p>&copy; Copyright {dateObj.getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
