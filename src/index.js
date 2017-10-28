import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';
import Home from './views/Home';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={Header}/>
      <Route exact path='/' component={Home}/>
      <Route path='/magic' component={Home}/>
      <Route path='/magic' component={Home}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
