import React, { useState } from "react";

import AuthModel from "../models/AuthModel";

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup_date, setSignup_date] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // setSignup_date = Date.now();
    // signup_date = setSignup_date
    AuthModel.register({ username, email, password, signup_date}).then((response) => {
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
        <h2>Register for an Account!</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
        <div className='form-input'>
            <label htmlFor='username'>Username: {username}</label>
            <input
            type='text'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            />
        </div>
        <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input
            type='text'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </div>
        <div className='form-input'>
            <label htmlFor='password'>Password</label>
            <input
            type='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
        </div>

        <input type='submit' value='Register' />
        </form>
    </div>
  );
}

export default Register;
