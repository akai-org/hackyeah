import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { IntlProvider } from 'react-intl';

import 'normalize.css/normalize.css';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'animate.css/animate.min.css';

import Home from './views/Home';
import Clothes from './views/Clothes';
import Food from './views/Food';
import Login from './views/Login';
import Logout from './views/Logout';
import Company from './views/Company';
import Private from './views/Private';
import Organization from './views/Organization';
import DonutClicker from './views/DonutClicker';
import NotFound from './views/NotFound';
import Donate from './views/Donate';
import AddArticle from './views/AddArticle';

ReactDOM.render(
  <IntlProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/clothes" component={Clothes} />
        <Route path="/food" component={Food} />
        <Route path="/company" component={Company} />
        <Route path="/private" component={Private} />
        <Route path="/organization" component={Organization} />
        <Route path="/donate" component={Donate} />
        <Route path="/clicker" component={DonutClicker} />
        <Route path="/add-article" component={AddArticle} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root'));
registerServiceWorker();
