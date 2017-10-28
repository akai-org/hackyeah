import React, { Component } from 'react';

const Box = (props) => (
  <div className="box">
    {props.name}: {props.children}
  </div>
);

export default Box;