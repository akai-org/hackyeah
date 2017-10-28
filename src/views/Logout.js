import React, { Component } from 'react';
import cookie from 'cookie';

class Logout extends Component {
  render() {
    document.cookie = cookie.serialize('loginName', '');
    window.location = "/";
    return (
      <div className="login-view">
      </div>
    );
  }
}

export default Logout;