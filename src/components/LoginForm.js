import React from 'react';

import Box from '../components/Box';

import './LoginForm.css';

const LoginForm = (props) => (
  <div className="LoginForm">
    <Box>
      <div className="login-container">
        <form role="form" id="loginForm" className="login-form" novalidate="">
          <div className="wrap-input">
            <label for="login">Login</label>
            <input type="text" placeholder="Login" required />
          </div>  

          <div className="wrap-input">
            <label for="password">Password</label>
            <input type="password" placeholder="Password" required />
          </div>
          
          <div className="wrap-input wrap-checkbox">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>

          <div className="wrap-btn">
            <button type="submit" class="btn btn-login">Login</button>
          </div>
        </form>
      </div>
    </Box>
  </div>
);

export default LoginForm;