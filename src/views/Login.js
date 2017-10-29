import React, { Component } from 'react';

import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Loader from '../components/Loader';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    fetch('http://localhost:3005/api/users')
      .then( (users) => {
        return users.json();
      })
      .then( (users) => {
        this.setState({users: [].concat(users)});
      })
      .catch( (err) => {
        console.log(err);
      } );
  }

  submit() {
    const user = {
      login: document.getElementById('login').value,
      password: document.getElementById('password').value
    };
    document.cookie = "loginName=" + user.login;
    let changeLocation = false;

    for (var i=0; i<this.state.users.length; i++) {
      const _user = this.state.users[i];
      if (_user.login === user.login && _user.password === user.password) {
        changeLocation = true;
        window.location = _user.location;
      }
    }

    if (!changeLocation) {
      alert('Check credentials');
    }
  }

  render() {
    if (!this.state) {
      return <Loader></Loader>;
    }
    return (
      <div className="login-view">
        <Header></Header>
        <LoginForm onSubmit={this.submit}></LoginForm>
      </div>
    );
  }
}

export default Login;