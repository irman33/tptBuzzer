import React, { Component } from 'react';
import PropTypes from 'prop-types';
import base  from '../base'
import Header from './Header';

class Login extends Component {
    constructor() {
      super();
  
      this.state = {
        games: []
      };
    }
  
    // <div className="top" id="top">
    //   <Header />
    // </div>
    // <div className="bottom" id="bottom" />
  
    render() {
      return (
        <React.Fragment>
            <div className="top" id="top">
                <Header />
                <div id="topBody" className="body">
                </div>
                <button className="btn btn-primary" onClick={() => this.props.authenticate()}>Sign in to Play</button>
            </div>
            <div className="bottom" id="bottom">
                
            </div>
        </React.Fragment>
      );
    }
  }

  Login.propTypes = { 
    authenticate: PropTypes.func.isRequired
  }
  
  export default Login;
  