import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '../components/Box';
import Stats from '../components/Stats';

const Company = () => (
  <div className="company-view">
    <Header></Header>

    <Box variant="small color-b">
      <header className="Box-header">
        <h2>Lidl</h2>
      </header>
      <main className="Box-content">
        <img src="/images/clothes.png" alt="" />
        <p>
          Opsi Twojej firmy...
        </p>
      </main>
    </Box>

    <Stats/>

    <Box variant="small color-b">
      <header className="Box-header">
        <h2>Towar Giveway</h2>
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

    <Box variant="small color-b">
      <header className="Box-header">
        <h2>Donate</h2>
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

    <Box variant="small color-b">
      <header className="Box-header">
        <h2>Start campany with us</h2>
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

    <Box variant="large color-b">
      <header className="Box-header">
        <h2>Historia Waszego wsparcia</h2>
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

    <Footer/>

  </div>
);


export default Company;
