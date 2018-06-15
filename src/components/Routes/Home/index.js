// Dependencies
import React, { Component } from 'react';

//Componentes
import Header from '../../Global/Header';
import Footer from '../../Global/Footer';

//Assets
import './css/Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <Header/>
      <div className="container mt-4">
        <div className="row">
        <div className="col-8">
          <h2>Bienvenido a Compania S.R.C</h2>
          <hr/>
        </div>
        </div>
        <div className="row mt-4">
        <div className="col-8">
        <h4>Nuestra forma de operar</h4>
        </div>
        </div>
        <div className="row">
        <div className="col-12">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet a ante ac sagittis. Maecenas venenatis euismod urna in vulputate. Aenean pulvinar dolor sed viverra ornare. Duis est nunc, dignissim a interdum quis, commodo dignissim erat. Maecenas vehicula neque vel dui interdum, eget ullamcorper magna volutpat. Nam porttitor erat vel viverra varius. Duis tempor sed lectus non egestas. Maecenas suscipit sollicitudin dolor, at lacinia sapien sagittis vel. Cras quis nibh eu odio dignissim commodo.</p>
        </div>
        </div>
        <div className="row">
        <div className="col-6">
          <button className="btn btn-md btn-primary"> ¡ Unite ya ! </button>
        </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Home;
