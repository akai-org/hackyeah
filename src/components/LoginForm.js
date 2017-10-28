import React from 'react';

import Box from '../components/Box';

import './LoginForm.css';

const LoginForm = (props) => (
  <div className="LoginForm">
    <Box>
      <div className="login-container">
        <form id="loginForm" className="login-form" novalidate="">
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
    <div className="m-t-10">
      <Box>
        <div className="account-info-container">
          <div className="account-info-box">
            <h4>Company Account</h4>
            <p>Login: companyUser</p>
            <p>Password: companyPassword</p>
          </div>
          <div className="account-info-private account-info-box">
            <h4>Private Account</h4>
            <p>Login: privateUser</p>
            <p>Password: privatePassword</p>
          </div>
          <div className="account-info-box">
            <h4>Organization Account</h4>
            <p>Login: organizationUser</p>
            <p>Password: organizationPassword</p>
          </div>
        </div>
      </Box>
    </div>
  </div>
);

export default LoginForm;