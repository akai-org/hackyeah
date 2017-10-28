import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';

import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Nazwa Aplikacji"></Header>
        <Home></Home>
      </div>
    );
  }
}

export default App;
