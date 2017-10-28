import React from 'react';
import {Link} from 'react-router-dom';

import Box from '../components/Box';

const Stats = () => (
  <Box variant="fullwidth">
    <h2>With yours help we founded 10.000 meals</h2>
    <div>
      <img src="http://via.placeholder.com/125x125" alt=""/>
      <p>10.000 meals</p>
    </div>
    <div>
      <img src="http://via.placeholder.com/125x125" alt=""/>
      <p>2.500 fed people</p>
    </div>
    <div>
      <img src="http://via.placeholder.com/125x125" alt=""/>
      <p>600.000 relayed clothes</p>
    </div>
    <footer>Thank you very much</footer>
  </Box>
);

export default Stats;