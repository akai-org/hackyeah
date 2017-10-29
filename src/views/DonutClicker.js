import React, { Component } from 'react';

import './Home.css';
import Box from '../components/Box';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/Clicker.css';

import cookie from 'cookie';

class DonutClicker extends Component {
  constructor(props) {
    super(props);
    const oldDonut = JSON.parse(cookie.parse(document.cookie).donutGame || '{}') ;
    this.points = oldDonut.points || 0;
    this.extraPoints = 1;
    this.donutRain = 10;
    this.superDonut = 100;
  }

  clickDonut = () => {
    if(!this.initForce) {
      document.getElementById('donut-mama').addEventListener('webkitmouseforceup', () => {
        this.clickDonut();
      });

      this.initForce = true;
    }

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

    const sound = document.getElementById("audio1");
    sound.play();

    document.cookie = cookie.serialize('donutGame', JSON.stringify({
      points: this.points
    }));
  }
  render() {
    return (
      <div className="clicker-view">
      <audio id="audio" style={{opacity: 0}} src="http://www.soundjay.com/button/beep-07.wav" autostart="false" ></audio>
      <audio id="audio1" style={{opacity: 0}} src="https://freesound.org/people/PaulMorek/sounds/172138/nom_D_03.wav" autostart="false" ></audio>
      
      <Header/>

      <Box variant="large color-c">
          <h1 id="score">{this.points}</h1>
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
