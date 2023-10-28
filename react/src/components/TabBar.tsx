// TabBar.tsx
import React, { useState } from 'react';
import './TabBar.css';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import { NavLink } from 'react-router-dom';

interface TabBarProps {
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  const [active, setActive] = useState(false);

  const classToggle = () => {
    setActive(!active)
  }

  return (
    <div className="tab-bar">
      
      <NavLink exact to="/" className='tab' activeClassName='active'>
        <CottageRoundedIcon style={{marginRight: 8}}/>
      </NavLink>
      <NavLink to="/Upload" className='tab' activeClassName='active'>
        <AddAPhotoRoundedIcon style={{marginRight: 8}}/>
      </NavLink>
      <NavLink to="/Archive" className='tab' activeClassName='active'>
        <AutoStoriesRoundedIcon style={{marginRight: 8}}/>
      </NavLink>
      <NavLink to="/Unity" className='tab' activeClassName='active'>
        Unity
      </NavLink>
      
    </div>
  );
};

export default TabBar;