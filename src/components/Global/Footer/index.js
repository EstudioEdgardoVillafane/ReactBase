// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';
import { Link } from 'react-router-dom';
class Footer extends Component {
  constructor(props){
    super(props);
    this.clickFunc = this.clickFunc.bind(this);
  }
  clickFunc(){
    fetch("./php/list.php", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify({
        key: 'test'
      })
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
    });
  }
	static propTypes = {
    copyright: PropTypes.string
  };

  render() {
  	const { copyright = '&copy; React 2017' } = this.props;

    return (
      <div className="Footer">
        <p onClick={this.clickFunc}> click me! </p>
        <Link to="/home">Toto</Link>
      </div>
    );
  }
}

export default Footer;
