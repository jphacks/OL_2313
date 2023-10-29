import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import TabBar from './components/TabBar';
import HomeContent from './components/HomeContent'; 
import UploadContent from './components/UploadContent';
import ArchiveContent from './components/ArchiveContent';
import Header from './components/Header';
import UnityContent from './components/UnityContent';
import DetailOfArchive from './components/DetailOfArchive';
import DetailOfPost from './components/DetailOfPost';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={HomeContent} />
          <Route path="/Upload" component={UploadContent} />
          <Route path="/Archive" component={ArchiveContent} />
          <Route path="/Unity" component={UnityContent} />
          <Route path="/DetailOfArchive" component={DetailOfArchive} />
          <Route path="/DetailOfPost" component={DetailOfPost} /> 
          <Route render={() => <p>not found!.</p>} />
        </Switch>
        <TabBar onTabChange={handleTabChange} />
    </BrowserRouter>
  ); 
};

export default App;