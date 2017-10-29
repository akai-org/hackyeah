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
    this.pointsMultiplier = 1;
    this.pointsConstant = 0;
    this.donutRain = 10;
    this.superDonut = 3;
    this.isRaining = false;
    this.superDonutAvailable;
    this.isSuper = false;
    this.acceleration = 20;
    this.numberOfRainingDonuts = 0;

  /* setInterval(function(){
      if (this.isSuper && this.acceleration >= 4) {
          if (this.acceleration >=13) this.acceleration -= 0.05;
          this.acceleration -= -0.01;
        }
        document.getElementById('donut-mama').style.animation= "rotating " + this.acceleration + "s linear infinite";
    }.bind(this), 10);
    */
  }



  clickDonut = () => {
    document.getElementById('donut-mama').classList.toggle("toggled-one");
    document.getElementById('donut-mama').classList.toggle("toggled-two");
    document.getElementById('score').classList.toggle("scored-one");
    document.getElementById('score').classList.toggle("scored-two");
    this.points += 1 * this.pointsMultiplier;
    document.getElementById('score').innerHTML = this.points;

    document.getElementById('extra-points').innerHTML = '+' + this.extraPoints*this.pointsMultiplier;
    document.getElementById('extra-points').classList.toggle("visible-one");
    document.getElementById('extra-points').classList.toggle("visible-two");


    if (this.points >= this.donutRain && !this.isRaining) {
      document.getElementById('rain-donut').classList.toggle("active");
      document.getElementById('rain-donut').classList.toggle("locked");

      this.isRaining = true;

    }
    if (this.points >= this.superDonut && !this.isGolden) {
      document.getElementById('super-donut').classList.remove("locked");
      document.getElementById('super-donut').classList.add("active");
      this.isGolden = true;
    }
  }

  getRainingDonut = () => {
    document.getElementById('rain-donut').classList.add("locked");
    this.numberOfRainingDonuts += 1;
    setInterval(function() {
      document.getElementById('score').classList.toggle("scored-one");
      document.getElementById('score').classList.toggle("scored-two");
      this.points += (1 + this.pointsConstant) * this.pointsMultiplier;
      document.getElementById('extra-points').classList.toggle("visible-one");
      document.getElementById('extra-points').classList.toggle("visible-two");
      document.getElementById('score').innerHTML = this.points;

    }.bind(this), 2000/this.numberOfRainingDonuts);
  }

  getGoldenDonut = () => {
    document.getElementById('super-donut').classList.add("locked");
    document.getElementById('mama').src = "/images/super-donut.png";
    this.superDonutAvailable = false;
    document.getElementById('donut-mama').style.animation= "rotating 2s linear infinite";


    this.isSuper = true;
    this.pointsMultiplier = 10;

    setTimeout(function() {
      this.isSuper = false;
      document.getElementById('mama').src = "/images/donut-mama.png";
      this.pointsMultiplier = 1;
      document.getElementById('donut-mama').style.animation= "rotating 20s linear infinite";
      setTimeout(function() {
        this.superDonutAvailable = true;
      }.bind(this), 5000);
    }.bind(this), 4000);
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
          <img className="donut-image" id="mama" src="/images/donut-mama.png" alt=""/>
        </div>
      </Box>

      <Box variant="color-a shop">
        <div id="rain-donut" className="locked" onClick={this.getRainingDonut}>
          <img src="/images/donut-rain.png" alt="" />
        </div>

        <div id="super-donut" className="locked" onClick={this.getGoldenDonut}>
          <img src="/images/super-donut.png" alt="" />
        </div>

        <div id="crazy-donut" className="locked">
        </div>

        <div id="donut-mine" className="locked">
        </div>
      </Box>

    </div>
  );
  }
}

export default DonutClicker;
