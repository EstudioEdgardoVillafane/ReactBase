// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Global/Header/index'; //Global
import AppRouter from './Approuter';        //Routes
import Footer from './Global/Footer/index'; //Global

//Assets
import './Global.css'
class App extends Component {
  
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <AppRouter body={children} />   
      </div>
    );
  }
}

export default App;
