import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import cookie from 'cookie';

const Header = (props) => (
  <header className="Header">
    <h1><Link to='/'>Happy Helping</Link></h1>
    <nav>
      { cookie.parse(document.cookie).loginName ? <a href="#"><strong>{cookie.parse(document.cookie).loginName}</strong></a> : '' }
      { cookie.parse(document.cookie).loginName ? <Link to='/logout'>Logout</Link> : <Link to='/login'>Login</Link> }
    </nav>
  </header>
);

export default Header;
