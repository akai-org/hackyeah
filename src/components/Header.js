import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = (props) => (
  <header className="Header">
    <h1>Title</h1>
    <nav>
      <Link to='/login'>Login</Link>
    </nav>
  </header>
);

export default Header;