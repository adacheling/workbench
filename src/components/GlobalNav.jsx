import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <h1 className="title has-text-white">Active Business Solutions Network Workbench Client</h1>
      </Link>
    </div>
  </nav>
);
