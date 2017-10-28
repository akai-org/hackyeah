import React from 'react';

import './Home.css';
import Box from '../components/Box';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Stats from '../components/Stats';

const Food = () => (
  <div className="home-view">
    <Header></Header>

    <Box variant="large color-b">
      <header className="Box-header">
        <h2>Don't know what to do with spare food?</h2>
      </header>
      <main className="Box-content">
        <img src="/images/donut.png" alt="" />
          <p>
            If you are a company, check our information booklet <br/>
             to see what organizations need the most help. <br/>
          </p>
      </main>
    </Box>

    <Stats></Stats>

    <Box variant="large color-c">
      <header className="Box-header">
        <h2>Organisations that need food</h2>
      </header>
      <main className="Box-content">
          <p>
            still working on that...
          </p>
      </main>
    </Box>

    <Footer/>

  </div>
);

export default Food;
