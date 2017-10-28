import React, { Component } from 'react';
import './Box.css';

var divStyle = {

};

const Box = (props) => (
  <div className={`Box ${props.variant ? props.variant : ''}`}>
   {props.name}: {props.children}

  </div>
);


export default Box;
