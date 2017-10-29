import React from 'react';
import { Link } from 'react-router-dom';

import './Loader.css';

import cookie from 'cookie';

console.log(cookie.parse(document.cookie));
console.log(cookie.parse(document.cookie).loginName);

const Loader = (props) => (
  <div className="loader">
    <div className="dot dot1"></div>
    <div className="dot dot2"></div>
    <div className="dot dot3"></div>
    <div className="dot dot4"></div>
  </div>
);

export default Loader;

