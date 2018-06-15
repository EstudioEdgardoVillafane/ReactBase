// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import './css/Header.css';

class Header extends Component {
  

  render() {
  
    return (
      <div className="Header">
        <div className="container">
          <div className="row">
            <div className="col-6">
            Compania S.R.C
            </div>
            <div className="col-6">
            toto toto tootx
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
