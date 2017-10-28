import React from 'react';

import './Home.css';
import Box from '../components/Box';
import Header from '../components/Header';
import Stats from '../components/Stats';

const Clothes = () => (
  <div className="home-view">
    <Header></Header>

    <Box variant="fullwidth color-b">
      <header className="Box-header">
        <h2>Let your wardrobe breath and help others!</h2>
      </header>
      <main className="Box-content">
        <img src="/images/clothes.png" alt="" />
        <p>
          Not enough space in your wardrobe?
          With us you can make some. <br/>
          Find a place where you can give away your old clothes. <br/>
          Make yourself and others happy <br/>
        </p>
      </main>
    </Box>

    <Box variant="flexible color-c">

    </Box>


    <Stats></Stats>

  </div>
);

export default Clothes;
