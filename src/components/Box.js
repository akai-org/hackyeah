import React from 'react';
import './Box.css';

const Box = (props) => (
  <div className={`Box ${props.variant ? props.variant : ''}`}>
   {props.children}
  </div>
);


export default Box;
