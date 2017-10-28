import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import Box from '../components/Box';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Stats from '../components/Stats';

import cookie from 'cookie';

const Home = () => (
  <div className="home-view">
    <Header></Header>

    <Box variant="large color-a" >
      <header className="Box-header">
        <h2>Let's make our world a better place 🙂</h2>
      </header>
      <main className="Box-content">
        <img src="/images/money-transparent.png" alt="" />
        <p>
          This is prototype version created during HackYeah hackathon in Kraków.
        </p>
      </main>
      <footer className="Box-footer">
        <div className="Box-button">
          <a href="https://github.com/akai-org/hackyeah/tree/x-social/develop">See source code</a>
        </div>
      </footer>
    </Box>

    <Box variant="small color-d" >
      <header className="Box-header">
        <h2>Share your foods</h2>
      </header>
      <main className="Box-content">
        <img src="/images/food.png" alt="" />
        <p>With us you can share foods with people in need. <br/> Company account needed.</p>
      </main>
      <footer className="Box-footer">
        <div className="Box-button">
          { cookie.parse(document.cookie).loginName=='companyUser' ? <Link to='/food'>Share food</Link> : <Link to='/login'>Login</Link> }
        </div>
      </footer>
    </Box>

    <Box variant="small color-b">
      <header className="Box-header">
        <h2>Share your clothes</h2>
      </header>
      <main className="Box-content">
        <img src="/images/clothes.png" alt="" />
        <p>Or relay your unused clothes.</p>
      </main>
      <footer className="Box-footer">
        <div className="Box-button">
          <Link to='/clothes'>
            Find on map
          </Link>
        </div>
      </footer>
    </Box>

    <Box variant="small color-c">
    <header className="Box-header">
      <h2>Our community needs yours support</h2>
      </header>
      <main className="Box-content">
      <img src="/images/money.png" alt="" />
      <p>Pay once, or subscribe.</p>
      </main>
      <footer className="Box-footer">
        <div className="Box-button">
          <Link to='/donate'>
            Help this way!
          </Link>
        </div>
      </footer>
    </Box>

    <Stats />

    <Box variant="small color-c">
      <header className="Box-header">
        <h2>Klikaj i pomagaj, każdego dnia</h2>
      </header>
      <main className="Box-content">
        <img src="/images/money.png" alt="" />
        <p>
          Pomagaj również przez inne inicjatywy
        </p>
      </main>
      <footer className="Box-footer">
        <div className="Box-button">
          <a href="https://www.siepomaga.pl/s/klikaj">Help this way!</a>
        </div>
      </footer>
    </Box>

    <Box variant="small color-a">
      <header className="Box-header">
        <h2>Zgłoś organizację</h2>
      </header>
      <main className="Box-content">
        <img src="/images/money.png" alt="" />
        <p>
          ...
        </p>
      </main>
      <footer className="Box-footer">
        <div className="Box-button">
          <a href="#">Zgłoś</a>
        </div>
      </footer>
    </Box>

    <Box variant="small color-d">
      <header className="Box-header">
        <h2>Chcesz dorzucić swoją cegiełkę?</h2>
      </header>
      <main className="Box-content">
        <img src="/images/money.png" alt="" />
        <p>
          ...
        </p>
      </main>
      <footer className="Box-footer">
        <div className="Box-button">
          <a href="#">Zgłoś</a>
        </div>
      </footer>
    </Box>

    <Box variant="medium color-c">
    <header className="Box-header">
      <h2>Our community needs yours support</h2>
      </header>
      <main className="Box-content">
      <img src="/images/money.png" alt="" />
      <p>Together we can make the world better. </p>
      </main>
      <footer className="Box-footer">
        <div className="Box-button">
          <Link to='/donate'>
            Help this way!
          </Link>
        </div>
      </footer>
    </Box>

    <Box variant="small color-d">
      <header className="Box-header">
        <h2>Chcesz dorzucić swoją cegiełkę?</h2>
      </header>
      <main className="Box-content">
        <img src="/images/money.png" alt="" />
        <p>
          ...
        </p>
      </main>
      <footer className="Box-footer">
        <div className="Box-button">
          <a href="#">Zgłoś</a>
        </div>
      </footer>
    </Box>

    <Footer></Footer>

  </div>
);


export default Home;
