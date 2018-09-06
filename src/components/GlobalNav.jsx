import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from '../img/Archemy_TM.png';

export default () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
		<img src={require('../img/Archemy_TM.png')}/><h4 className="title">Active Business Solutions Network Workbench Client</h4>
      </Link>
    </div>
  </nav>
);
