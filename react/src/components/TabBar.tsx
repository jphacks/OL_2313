// TabBar.tsx
import React, { useState } from 'react';
import './TabBar.css';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';

interface TabBarProps {
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="tab-bar">
      <div
        className={`tab ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => handleTabClick('home')}
      >
        <CottageRoundedIcon style={{marginRight: 8}}/>
      </div>
      <div
        className={`tab ${activeTab === 'Upload' ? 'active' : ''}`}
        onClick={() => handleTabClick('Upload')}
      >
        <AddAPhotoRoundedIcon style={{marginRight: 8}}/>
      </div>
      <div
        className={`tab ${activeTab === 'Archive' ? 'active' : ''}`}
        onClick={() => handleTabClick('Archive')}
      >
        <AutoStoriesRoundedIcon style={{marginRight: 8}}/>
      </div>
      <div
        className={`tab ${activeTab === 'Unity' ? 'active' : ''}`}
        onClick={() => handleTabClick('Unity')}
      >
        Unity
      </div>
      
    </div>
  );
};

export default TabBar;