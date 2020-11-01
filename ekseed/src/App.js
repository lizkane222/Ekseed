import React from 'react';
import {atom, useRecoilState} from "recoil";

import './App.css';
// import SideBar from './components/SideBar/SideBar';
import Routes from './config/Routes'
import SideBar from "./components/SideBar/SideBar"

function App() {


  return (
    <div className="App">
      {/* <div> */}

      {/* </div> */}
      <SideBar />
      <Routes />
    </div>
  );
}

export default App;








