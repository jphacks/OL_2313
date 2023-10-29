import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <img src={process.env.PUBLIC_URL + '/ismet_.png'} alt="Logo" className="header-logo" />
    </div>
  );
}

export default Header;