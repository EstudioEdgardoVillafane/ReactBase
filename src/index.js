// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Routes
import AppRoutes from './routes';

// Assets
import './index.css';

render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
);
