import React from 'react';
import './Box.css';

const Box = (props) => (
  <div className={`Box fadeIn animated ${props.variant ? props.variant : ''}`}>
   {props.children}
  </div>
);

export default Box;
