import React, { Component } from 'react';

import Box from '../components/Box';

const Home = () => (
  <div>
    <Box variant="fullwidth">
      <h2>With yours help we founded 10.000 meals</h2>
      <div>
        <img src="http://via.placeholder.com/125x125" alt="" />
        <p>10.000 meals</p>
      </div>
      <div>
        <img src="http://via.placeholder.com/125x125" alt="" />
        <p>2.500 fed people</p>
      </div>
      <div>
        <img src="http://via.placeholder.com/125x125" alt="" />
        <p>600.000 relayed clothes</p>
      </div>
      <footer>Thank you very much</footer>
    </Box>
    <Box>
      <h2>Share your foods</h2>
      <img src="http://via.placeholder.com/250x250" alt="" />
      <p>With us you can share foods with people in need.</p>
    </Box>
    <Box>
      <h2>Share your clothes</h2>
      <img src="http://via.placeholder.com/250x250" alt="" />
      <p>Or relay your unused clothes.</p>
    </Box>
    <Box>
      <h2>Our community needs yours support</h2>
      <img src="http://via.placeholder.com/250x250" alt="" />
      <p>Together we can make the world better place.</p>
    </Box>
  </div>
);

export default Home;