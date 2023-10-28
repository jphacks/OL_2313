import React, { useState } from 'react';
import TodoList from './components/TodoList';
import MyComponent from './components/MyComponent';
import TabBar from './components/TabBar';
import HomeContent from './components/HomeContent'; 
import UploadContent from './components/UploadContent';
import ArchiveContent from './components/ArchiveContent';
import Header from './components/Header';

import './App.css';
import UnityContent from './components/UnityContent';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Header/>
      <TabBar onTabChange={handleTabChange} />
     
      {/* タブに応じてコンテンツを切り替え */}
      {activeTab === 'home' && <HomeContent />}
      {activeTab === 'Upload' && <UploadContent />}
      {activeTab === 'Archive' && <ArchiveContent />}
      {activeTab === 'Unity' && <UnityContent />}
      
      
    </div>
  ); 
};

export default App;