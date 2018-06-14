// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets

class AppRouter extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
    const { body } = this.props;

    return (
      <div className="AppRouter">
        {body}
      </div>
    );
  }
}

export default AppRouter;
