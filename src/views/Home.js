import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import Box from '../components/Box';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Stats from '../components/Stats';

const Home = () => (
  <div className="home-view">
    <Header></Header>

    <Box variant="large color-a" >
      <header className="Box-header">
        <h2>Let's make our world a better place 🙂</h2>
      </header>
      <main className="Box-content">
        <img src="/images/food.png" alt="" />
        <p>With us you can share foods with people in need.</p>
      </main>
      <footer className="Box-footer">
        <div className="Box-button">daj hajs</div>
      </footer>
    </Box>

    <Box variant="small color-a" >
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
            Help this way!
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

    <Box variant="large">
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

    <Box variant="small color-c">
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

    <Box variant="small color-c">
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

    <Box variant="medium color-a">
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

    <Footer></Footer>

  </div>
);


export default Home;
