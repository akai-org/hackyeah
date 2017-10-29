import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = (props) => (
  <footer className="Footer">
    Designed and Developed by <Link to='/clicker'>AKAI</Link> 👽
  </footer>
);

export default Footer;
