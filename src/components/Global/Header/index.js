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
        <div className="Logo">
          <ul className="Menu">
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
