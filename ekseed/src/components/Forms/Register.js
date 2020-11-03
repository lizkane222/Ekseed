import React, { useState } from "react";

import NiceInputPassword from 'react-nice-input-password';
import 'react-nice-input-password/dist/react-nice-input-password.css';
import {TextField, InputLabel, Typography, showSecurityLevelDescription} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap'
import {useHistory, UseHistory} from "react-router-dom";

import AuthModel from "../../models/AuthModel";
import SideBar from "../SideBar/SideBar";
import "./Forms.css"

function Register(props) {
  const history = useHistory()

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup_date = useState("");
  const connections = useState("");

  const [error, setError] = useState("");


  function handleChange(event) {
    event.preventDefault(setPassword)

    setPassword(event.target.value)
  }


  
  function handleSubmit(event) {
    event.preventDefault();

    AuthModel.register({ username, email, password}).then((response) => {
      console.log(response);
      if (response.status === 201) {
        history.push("/login");
      } else {
        setError(response.message);
      }
    });
  }



  const securityLevels=[
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
    ]

  return (
    <div>
        <div>
          <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered id="registerModal">
                  <Modal.Header closeButton>
                      {/* <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title> */}
                      <Modal.Title id="registerModal"><h4 className="modalHeader">Register</h4></Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <h2>Register for an Account!</h2>

              {error && <p style={{ color: "red" }}>{error}</p>}
              <form onSubmit={handleSubmit}>
                  <div className='form-input'>
                      <label htmlFor='username'>Username: <span className="inputValue">{username}</span></label>
                      <input
                      type='text'
                      name='username'
                      placeholder="username"
                      onChange={(e) => setUsername(e.target.value)}
                      // value={username}
                      />
                  </div>

                  <div className='form-input'>
                      <label htmlFor='email'>Email <span className="inputValue">{email}</span></label>
                      <input
                      type='text'
                      name='email'
                      placeholder="email address"
                      onChange={(e) => setEmail(e.target.value)}
                      // value={email}
                      />
                  </div>

                    {/* BEGIN react-nice-input-password */}
                    {/* <Password data={password} /> */}
                    {/* {<NiceInputPassword
                      label="password"
                      name="password"
                      LabelComponent={InputLabel}
                      InputComponent={TextField}
                      InputComponentProps={{
                        variant: 'outlined',
                        InputProps: {
                          endAdornment: <LockIcon />,
                        }
                      }}
                      value={password}
                      showSecurityLevelBar
                      showSecurityLevelDescription
                      securityLevels={securityLevels}
                      onChange={handleChange}
                    />} */}
                    <div className='form-input'>
                      <label htmlFor='password'>Password</label>
                      <input
                      type='password'
                      name='password'
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      />
                  </div>
                    
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onHide}>Close</button>
                            {/* <button type="button" className="btn btn-primary"> */}
                            <input 
                            type="submit"
                            value="Register"
                            className="btn btn-primary"
                            // onClick={props.push("/login")}
                            // onClick={props.onHide,}.then{props.history.push("/login")}
                            onClick={props.onHide}
                            />
                        </div>
                  {/* <input type='submit' value='Register' /> */}
              </form>
            </Modal.Body>

            <Modal.Footer>
              {/* <button onClick={props.onHide}>X</button> */}
            </Modal.Footer>
          </Modal>
        </div>
    </div>
  );
}

export default Register;
