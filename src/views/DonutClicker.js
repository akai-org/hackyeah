import React, { Component } from 'react';

import './Home.css';
import Box from '../components/Box';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/Clicker.css';

class DonutClicker extends Component {
  constructor(props) {
    super(props);
    this.points = 0;
    this.extraPoints = 1;
    this.donutRain = 10;
    this.superDonut = 100;
  }

  clickDonut = () => {
    document.getElementById('donut-mama').classList.toggle("toggled-one");
    document.getElementById('donut-mama').classList.toggle("toggled-two");
    document.getElementById('score').classList.toggle("scored-one");
    document.getElementById('score').classList.toggle("scored-two");
    this.points += 1;
    document.getElementById('score').innerHTML = this.points;

    document.getElementById('extra-points').innerHTML = '+' + this.extraPoints;
    document.getElementById('extra-points').classList.toggle("visible-one");
    document.getElementById('extra-points').classList.toggle("visible-two");


    if (this.points >= this.donutRain) {
      document.getElementById('rain-donut').classList.toggle("active");
    }
    if (this.points >= this.superDonut) {
      document.getElementById('super-donut').classList.toggle("active");
    }
  }
  render() {
    return (
      <div className="clicker-view">

      <Header/>

      <Box variant="large color-c">
          <h1 id="score">0</h1>
          <h1 id="extra-points" className="visible-one"></h1>
      </Box>

      <Box variant="large color-d">

        <div id="donut-mama" className="donut-container toggled-one" onClick={this.clickDonut}>
          <img className="donut-image" src="/images/donut-mama.png" alt=""/>
        </div>
      </Box>

      <Box variant="color-a shop">
        <div id="rain-donut">
        </div>

        <div id="super-donut">
        </div>

        <div id="crazy-donut">
        </div>

        <div id="donut-mine">
        </div>
      </Box>

    </div>
  );
  }
}

export default DonutClicker;
