import React from 'react';

import './App.css';
import SideBar from './components/SideBar/SideBar';
import Routes from './config/Routes'


function App() {
  return (
    <div className="App">
      <h1>Ekseed</h1>
      <SideBar />
      <Routes />
    </div>
  );
}

export default App;
