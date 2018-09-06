import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Archemy_TM.png';

import './App.css';

export default () => (
  <nav className="navbar is-dark" style="background-color: #1F5F71;" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
		<img src={require('../img/Archemy_TM.png')}/><h3 className="title has-text-white">Active Business Solutions Network Workbench Client</h3>
      </Link>
    </div>
  </nav>
);
