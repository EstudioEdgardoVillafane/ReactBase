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
            <div className="offset-4 col-4 d-flex flex-row-reverse ">
              <a className="ml-4 na-link">Contact</a>
              <a className="ml-4 na-link">About</a>
              <a className="ml-4 na-link">Home</a>
            </div>
          </div>
        </div>
      </div>
        <div className="src-fondo">
        </div>
      </div>
    );
  }
}

export default Header;
