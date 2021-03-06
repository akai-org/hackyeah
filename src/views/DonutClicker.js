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

    this.donutRain = 10;

    this.power1Available = true;                   //it changes the constant points that are generated by a click
    this.power1Cost = [10, 100, 400, 2000, 40000, 100000];
    this.power1Constants = [0, 1, 4, 9, 19];
    this.power1 = 0;

    this.power2Available = true;                   //it multiplies the extra points by a set value
    this.power2Cost = [50, 200, 2000, 40000];
    this.power2Multipliers = [1, 10, 40, 80, 200];
    this.power2 = 0;
    this.isSuper = false;

    this.power3Available = true;                   //it gives you free x donuts every y seconds
    this.power3Cost = [1000, 4000, 12000, 50000];
    this.power3 = 0;

    this.power4Available = true;                   //it multiplies your current score by a set value
    this.power4Cost = [10000, 40000, 120000, 500000];
    this.power4Percentages = [10, 15, 25, 40];
    this.power4 = 0;

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
    console.log('constant: ' + this.power1Constants[this.power1]);
    console.log('multiplier: ' + this.power2Multipliers[this.power2]);
    this.points += (1+this.power1Constants[this.power1]) * this.power2Multipliers[this.power2];
    document.getElementById('score').innerHTML = this.points;

    document.getElementById('extra-points').innerHTML = '+' + (1+this.power1Constants[this.power1]) * this.power2Multipliers[this.power2];
    document.getElementById('extra-points').classList.toggle("visible-one");
    document.getElementById('extra-points').classList.toggle("visible-two");

    //can we buy 1 power up
    if (this.points >= this.power1Cost[this.power1] && this.power1Available && this.power1<4) {
      document.getElementById('rain-donut').classList.add("active");
      document.getElementById('rain-donut').classList.remove("locked");
      document.getElementById('rain-donut').classList.toggle("bought-one");
      document.getElementById('rain-donut').classList.toggle("bought-two");
    }

    //can we buy 2 power up
    if (this.points >= this.power2Cost[this.power2] && !this.isSuper && this.power2Available) {
      document.getElementById('super-donut').classList.remove("locked");
      document.getElementById('super-donut').classList.add("active");
      document.getElementById('super-donut').classList.toggle("bought-one");
      document.getElementById('super-donut').classList.toggle("bought-two");
    }

    //can we buy 3 power up
    if (this.points >= this.power3Cost[this.power3] && this.power3Available) {
      document.getElementById('donut-hand').classList.remove("locked");
      document.getElementById('donut-hand').classList.add("active");
      document.getElementById('donut-hand').classList.toggle("bought-one");
      document.getElementById('donut-hand').classList.toggle("bought-two");
    }

    //can we buy 4 power up
    if (this.points >= this.power4Cost[this.power4] && this.power4Available) {
      document.getElementById('donut-mine').classList.remove("locked");
      document.getElementById('donut-mine').classList.add("active");
      document.getElementById('donut-mine').classList.toggle("bought-one");
      document.getElementById('donut-mine').classList.toggle("bought-two");
    }


    const sounds = document.getElementsByClassName("sound");
    const index = Math.floor((Math.random()*1000) % 6);
    sounds[index].play();

    document.cookie = cookie.serialize('donutGame', JSON.stringify({
      points: this.points
    }));
  }

  getRainingDonut = () => {
  if  (!document.getElementById('rain-donut').classList.contains("locked")) {
      document.getElementById('rain-donut').classList.add("locked");
      this.points -= this.power1Cost[this.power1];
      this.power1 += 1;
      document.getElementById('score').innerHTML = this.points;
      document.getElementById('rain-1').classList.remove('hidden');
      document.getElementById('rain-1').opacity = "1";
      document.getElementById('power-1-value').innerHTML = '+ ' + this.power1Constants[this.power1];
    }
  }

  getGoldenDonut = () => {
    if (!document.getElementById('super-donut').classList.contains("locked")) {
      document.getElementById('super-donut').classList.add("locked");
      document.getElementById('mama').src = "/images/super-donut.png";
      this.superDonutAvailable = false;
      document.getElementById('donut-mama').style.animation= "rotating 2s linear infinite";
      this.points -= this.power2Cost[this.power2];
      this.power2 += 1;
      document.getElementById('score').innerHTML = this.points;
      this.isSuper = true;

      setTimeout(function() {
        this.isSuper = false;
        document.getElementById('mama').src = "/images/donut-mama.png";
        document.getElementById('donut-mama').style.animation= "rotating 20s linear infinite";
        setTimeout(function() {
          this.superDonutAvailable = true;
        }.bind(this), 10000);
      }.bind(this), 4000);
    }
  }

  getDonutHand = () => {
    if (!document.getElementById('donut-hand').classList.contains("locked")) {
      document.getElementById('donut-hand').classList.add("locked");
      this.points -= this.power3Cost[this.power3];
      this.power3 += 1;
      document.getElementById('score').innerHTML = this.points;
      document.getElementById('game-scene').style.cursor = "/images/hand.png, auto";
    }
  }

  getDonutMine = () => {
    if (!document.getElementById('donut-mine').classList.contains("locked")) {
      document.getElementById('donut-mine').classList.add("locked");
      this.points -= this.power4Cost[this.power4];
      this.power4 += 1;
      document.getElementById('score').innerHTML = this.points;
      document.getElementById('mine-1').classList.remove('hidden');
      document.getElementById('mine-1').opacity = "1";

    }
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

      <Box variant="large color-c board">
        <div id="game-scene" className="bonuses">
          <img src="/images/donut-rain.png" className="hidden" id="rain-1" alt=""/>
          <div id="power-1-value" className="donut-constant"></div>
        </div>
          <div className="score-board">
            <h1 id="score">{this.points}</h1>
            <h1 id="extra-points" className="visible-one"></h1>
          </div>
          <div className="bonuses">
            <img src="/images/mine.png" className="hidden" id="mine-1" alt=""/>
          </div>
      </Box>

      <Box variant="large color-d">

        <div id="donut-mama" className="donut-container toggled-one" onClick={this.clickDonut}>
          <img className="donut-image" id="mama" src="/images/donut-mama.png" alt=""/>
        </div>
      </Box>

      <Box variant="color-a shop">
        <div id="rain-donut" className="locked bought-one" onClick={this.getRainingDonut}>
            <img src="/images/donut-rain.png" alt="" />
        </div>

        <div id="super-donut" className="locked bought-one" onClick={this.getGoldenDonut}>
            <img src="/images/super-donut.png" alt="" />
        </div>

        <div id="donut-hand" className="locked bought-one" onClick={this.getDonutHand}>
            <img src="/images/hand.png" alt="" />
        </div>

        <div id="donut-mine" className="locked bought-one" onClick={this.getDonutMine}>
            <img src="/images/mine.png" alt="" />
        </div>

      </Box>

    </div>
  );
  }

  componentDidMount() {
    // if(!window.gtag) return;
    // document.getElementById('donut-mama').addEventListener('click', function(){
    //   window.gtag.trackEvent('send', {
    //     hitType: 'event',
    //     eventCategory: 'Donut',
    //     eventAction: 'click',
    //     eventLabel: 'HackYeah'
    //   });
    // })
  }
}

export default DonutClicker;
