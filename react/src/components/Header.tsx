// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';  // 追加
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <img src={process.env.PUBLIC_URL + '/ismet_.png'} alt="Logo" className="header-logo" />
      <Link to="/About" className="navigation-link">About</Link> 
      
      {/* その他のヘッダーコンポーネントの内容 */}
    </div>
  );
}

export default Header;
