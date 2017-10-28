import React from 'react';

import Box from '../components/Box';

import './LoginForm.css';

const LoginForm = (props) => (
  <Box>
    <form role="form" id="loginForm" novalidate="">
      <label for="login">Login</label>
      <input type="text" placeholder="Login" required />

      <label for="password">Password</label>
      <input type="password" placeholder="Password" required />

      <input type="checkbox" /><label>Remember Me</label>
      <button type="submit">Login</button>
    </form>
  </Box>
);

export default LoginForm;