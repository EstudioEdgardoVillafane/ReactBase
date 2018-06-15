// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';
import { Link } from 'react-router-dom';
class Footer extends Component {

  render() {

    return (
      <div className="Footer">
        <p onClick={this.handleClick}> click me! </p>
        <Link to="/home">Toto</Link>
      </div>
    );
  }
}

export default Footer;
