import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <img src={process.env.PUBLIC_URL + '/ismet_.png'} alt="Logo" className="header-logo" />
      {/* その他のヘッダーコンポーネントの内容 */}
    </div>
  );
}

export default Header;