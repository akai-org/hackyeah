import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '../components/Box';

const Donate = () => (
  <div className="donate-view">
    <Header/>
    <Box variant="small color-a" >
      <header className="Box-header">
        <h2>Share your foods</h2>
      </header>
      <main className="Box-content">
        <img src="/images/money.png" alt="" />
        <p>With us you can share foods with people in need.</p>
      </main>
      <footer className="Box-footer">
        <img src="http://f4ad.com/wp-content/uploads/2013/03/paypal-donate-button11.png" alt="Donate"/>
      </footer>
    </Box>
    <Footer/>
  </div>
);

export default Donate;
