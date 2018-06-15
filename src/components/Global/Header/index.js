// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import './css/Header.css';

class Header extends Component {
  

  render() {
  
    return (
      <div>
      <div className="Header">
        <div className="container">
          <div className="row pt-3">
            <div className="col-4">
              <p className="">
                Compania S.R.C
              </p>
            </div>
            <div className="offset-4 col-4 ">
              <a className="ml-auto">Home</a>
              <a className="ml-4">About</a>
              <a className="ml-4">Contact</a>
            </div>
          </div>
        </div>
        <div className="src-fondo">
        </div>
      </div>
      </div>
    );
  }
}

export default Header;
