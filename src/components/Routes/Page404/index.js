// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page404 extends Component {
  render() {
    return (
      <div className="Page404">
        <h1>Error 404 - The route that you are searching not exist</h1>
        <p> You can return to home doing click <a><Link to="/"> here </Link></a></p>
      </div>
    );
  }
}

export default Page404;
