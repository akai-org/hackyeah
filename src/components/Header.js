import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import cookie from 'cookie';

console.log(cookie.parse(document.cookie));
console.log(cookie.parse(document.cookie).loginName);

const Header = (props) => (
  <header className="Header">
    <h1><Link to='/'>Help</Link></h1>
    <nav>
      { cookie.parse(document.cookie).loginName ? <Link to='/logout'>Logout</Link> : <Link to='/login'>Login</Link> }
    </nav>
  </header>
);

export default Header;
