import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './views/Home';
import Clothes from './views/Clothes';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Donate from './views/Donate';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/magic' component={Home}/>
      <Route path="/login" component={Login} />
      <Route path="/clothes" component={Clothes} />
      <Route path="/donate" component={Donate} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
