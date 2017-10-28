import React from 'react';

import './Home.css';
import Box from '../components/Box';
import Header from '../components/Header';

const Home = () => (
  <div className="home-view">
    <Header></Header>

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

    <Box variant="flexible color-a" >
      <header className="Box-header">
        <h2>Share your foods</h2>
      </header>
      <main className="Box-content">
        <img src="/images/food.png" alt="" />
        <p>With us you can share foods with people in need.</p>
      </main>
      <footer className="Box-footer">
          <div className="Box-button">daj hajs</div>
      </footer>
    </Box>

    <Box variant="flexible color-b">
      <header className="Box-header">
        <h2>Share your clothes</h2>
      </header>
      <main className="Box-content">
        <img src="/images/clothes.png" alt="" />
        <p>Or relay your unused clothes.</p>
      </main>
      <footer className="Box-footer">
          <div className="Box-button">daj hajs</div>
      </footer>
    </Box>

    <Box variant="flexible color-c">
    <header className="Box-header">
      <h2>Our community needs yours support</h2>
      </header>
      <main className="Box-content">
      <img src="/images/money.png" alt="" />
      <p>Together we can make the world better. </p>
      </main>
      <footer className="Box-footer">
          <div className="Box-button">daj hajs</div>
      </footer>
    </Box>


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

    <div></div>

  </div>
);


export default Home;
