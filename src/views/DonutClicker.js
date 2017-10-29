import React, { Component } from 'react';

import './Home.css';
import Box from '../components/Box';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/Clicker.css';
// import GoogleAnalytics from 'ga';

import cookie from 'cookie';

class DonutClicker extends Component {
  constructor(props) {
    super(props);
    const oldDonut = JSON.parse(cookie.parse(document.cookie).donutGame || '{}') ;
    this.points = oldDonut.points || 0;
    this.extraPoints = 1;
    this.donutRain = 10;
    this.superDonut = 100;
    //
    // var ua = "UA-108804320-1";
    // var host = 'hackyeah.akai.org.pl';
    // this.ga = new GoogleAnalytics(ua, host);
    // this.ga.trackPage('clicker');
    // console.log(this.ga);
  }

  clickDonut = () => {
    if(!this.initForce) {
      document.getElementById('donut-mama').addEventListener('webkitmouseforceup', () => {
        this.clickDonut();
      });

      this.initForce = true;
    }

    // this.ga.trackEvent('send', {
    //   hitType: 'event',
    //   eventCategory: 'Donut',
    //   eventAction: 'click',
    //   eventLabel: 'HackYeah'
    // });

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

    const sounds = document.getElementsByClassName("sound");
    const index = Math.floor((Math.random()*1000) % 6);
    sounds[index].play();

    document.cookie = cookie.serialize('donutGame', JSON.stringify({
      points: this.points
    }));
  }
  render() {
    return (
      <div className="clicker-view">
      <audio className="sound" src="/nom1.wav" autostart="false" ></audio>
      <audio className="sound" src="/nom2.wav" autostart="false" ></audio>
      <audio className="sound" src="/nom3.wav" autostart="false" ></audio>
      <audio className="sound" src="/nom4.wav" autostart="false" ></audio>
      <audio className="sound" src="/nom5.wav" autostart="false" ></audio>
      <audio className="sound" src="/nom6.wav" autostart="false" ></audio>
      
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
