import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as sessionActions from '../../store/session';
import Demo from '../Demo';
import './LoginForm.css';

function LoginFormPage(){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if(sessionUser) return(
    <Redirect to="/" />
  )

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
    .catch(async res =>{
      const data = await res.json();
      if(data && data.errors) setErrors(data.errors);
    })
  }

  return(
  <div className="auth-form-page">
    <div className="auth-form-container">
      <div className="auth-form-top" >
        <img className="auth-logo" src="/images/brand.svg" alt="brand"/>
          <h3>Log in to Clickr</h3>
      </div>
        <form onSubmit={handleSubmit}>
          <ul className="errors">
            {errors.map((error, idx) =>
          <>
          <li key={error.idx}>
            <i class="fa-solid fa-exclamation  fa-pulse"></i>
            &nbsp; {error}
          </li>
          </>
        )}
          </ul>
          <div className="input-container">
            <input type="text"
            placeholder='Username or Email'
            value={credential}
            name="credential"
            onChange={e => setCredential(e.target.value)}
            />
            <input type="password"
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="auth-btn-container">
            <button type="submit" className="auth-btn">Sign In</button>
            <Demo />
          </div>
        </form>
    </div>
  </div>
  )
};

export default LoginFormPage;
