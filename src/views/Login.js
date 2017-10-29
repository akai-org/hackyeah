import React, { Component } from 'react';

import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  componentWillMount() {
    fetch('http://localhost:3005/api/users')
      .then( (data) => {
        return data.json();
      })
      .then( (data) => {
        this.setState( () => { return data } );
      })
      .catch( (err) => {
        console.log(err);
      } );
  }

  submit() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    document.cookie = "loginName=" + login;

    if (login === 'companyUser' && password === 'companyPassword') {
      window.location = "/company"
    } else if (login === 'privateUser' && password === 'privatePassword') {
      window.location = "/private"
    } else if (login === 'organizationUser' && password === 'organizationPassword') {
      window.location = "/organization"
    } else {
      alert('Check credentials');
    }

  }

  render() {
    return (
      <div className="login-view">
        <Header></Header>
        <LoginForm onSubmit={this.submit}></LoginForm>
      </div>
    );
  }
}

export default Login;