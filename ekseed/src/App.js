import React from 'react';
import {atom, useRecoilState} from "recoil";

import './App.css';
// import SideBar from './components/SideBar/SideBar';
import Routes from './config/Routes'
import SideBar from "./components/SideBar/SideBar"
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import {Modal} from 'react-bootstrap'

function App() {
  

  return (
    <div className="App">
      {/* <div> */}

      {/* </div> */}
      <SideBar />
      <Routes />

      
      

      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;








