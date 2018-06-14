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
    handleClick(){
      const url = "./php/something.php"; //Use the point when you are using a route of php.
      const data = {
          nombre: "toto",
          apellido: "hourcade"
      }; //Data as object.
        fetch(url, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'aplication/json',
          },
          body: data,   // You can use the function JSON.stringfy too.
        }) //Here we are finishing the method post with some php 
        .then((response) => response.json())    //And here we are calls the response like json of this php;
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
