import React from 'react';
import './UnityContent.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const UnityContent: React.FC = () => {
  return (
    <div>
      <img src= 'home_up.png' className='home-logo'/>
      <button className='button2'>はい</button>
      <button>いいえ</button>
      <img src='home_down.png' className='home-logo2'/>
     
      {/* <TodoInput />
      <TodoList /> */}
    </div>
  );
};

export default UnityContent;