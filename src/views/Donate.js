import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '../components/Box';
import './Home.css';

const Donate = () => (
  <div className="donate-view">

    <Header/>

    <Box variant="large color-d">
      <header className="Box-header">
        <h2>Donut your money!</h2>
      </header>
      <main className="Box-content">
        <img src="/images/donut.png" alt="" />
        <p>Thank you!</p>
        <footer className="Box-footer">
          <div className="donate-buttons">
            <div className="Box-button">
              <a href="#">Donate 1 PLN</a>
            </div>
            <div className="Box-button">
              <a href="#">Donate 5 PLN</a>
            </div>
            <div className="Box-button">
              <a href="#">Donate 50 PLN</a>
            </div>
            <div className="Box-button">
              <a href="#">Donate 100 PLN</a>
            </div>
          </div>
        </footer>
      </main>
    </Box>

    <Footer/>
  </div>
);

export default Donate;
