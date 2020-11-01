import React, { useState } from "react";
import NiceInputPassword from 'react-nice-input-password';
import 'react-nice-input-password/dist/react-nice-input-password.css';
import {TextField, InputLabel, Typography} from '@material-ui/core';
// import LockIcon from '@material-ui/icons/Lock';

import AuthModel from "../models/AuthModel";
import SideBar from "../components/SideBar/SideBar";

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup_date = useState("");
  const connections = useState("");

  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    AuthModel.register({ username, email, password}).then((response) => {

      console.log(response);
      if (response.status === 201) {
        props.history.push("/login");
      } else {
        setError(response.message);
      }
    });
  }


  return (
    <div>
        {/* <SideBar /> */}
        <div>

          <h2>Register for an Account!</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
              <div className='form-input'>
                  <label htmlFor='username'>Username: {username}</label>
                  <input
                  type='text'
                  name='username'
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  />
              </div>
              <div className='form-input'>
                  <label htmlFor='email'>Email</label>
                  <input
                  type='text'
                  name='email'
                  placeholder="email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  />
              </div>

                {/* BEGIN react-nice-input-password */}
                {/* <Password data={password} /> */}
                
                <NiceInputPassword
                  label="password"
                  name="password"
                  value={password}
                  showSecurityLevelBar
                  onChange={(e) => setPassword(e.target.value)}
                  onSubmit={(e) => setPassword(e.target.value)}
                  LabelComponent={InputLabel}
                  InputComponent={TextField}
                  // InputComponentProps={{
                  //   variant: 'outlined',
                  //   // InputProps: {
                  //   //   endAdornment: <LockIcon />,
                  //   // }
                  // }}
                  securityLevels={[
                    {
                      descriptionLabel: <Typography>1 number</Typography>,
                      validator: /.*[0-9].*/,
                    },
                    {
                      descriptionLabel: <Typography>1 lowercase letter</Typography>,
                      validator: /.*[a-z].*/,
                    },
                    {
                      descriptionLabel: <Typography>1 uppercase letter</Typography>,
                      validator: /.*[A-Z].*/,
                    },
                  ]}
                  
                />


              {/* <div className='form-input'>
                  <label htmlFor='password'>Password</label>
                  <input
                  type='password'
                  name='password'
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  />
              </div> */}


              
              <input type='submit' value='Register' />
          </form>
        </div>
    </div>
  );
}

export default Register;
