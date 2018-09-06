import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from '../img/Archemy_TM.png';

export default () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
	  <div className="navbar-item">
		<img src={require('../img/Archemy_TM.png')}/><h3 className="nav-title">Active Business Solutions Network Workbench Client</h3>
	  </div>
    </div>
  </nav>
);
