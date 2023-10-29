import React, { useState } from 'react';
import Archive from './Archive';
import Myrecipe from './Myrecipe';
import "./ArchiveContent.css";

function App() {
  const [activeComponent, setActiveComponent] = useState('Archive');

  const changeComponent = (componentName: string) => {
    setActiveComponent(componentName);
  };

  return (
   <div className='archive-content'>
    <div>
      <button onClick={() => changeComponent('Archive')} className={activeComponent === 'Archive' ? 'active-button' : 'non-Active-button'}>料理アーカイブ</button>
      <button onClick={() => changeComponent('Myrecipe')} className={activeComponent === 'Myrecipe' ? 'active-button' : 'non-Active-button'}>投稿レシピ</button>

      {activeComponent === 'Archive' && <Archive />}
      {activeComponent === 'Myrecipe' && <Myrecipe />}
    </div>
   </div>
  );
}

export default App;