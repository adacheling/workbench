import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Archemy_TM.png';

export default () => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
		render() {
			return (
				<div className="row">
					<div className="logo">
						<img src={logo} width="100" height="50" />
					</div>
				</div>
			);
		}
        <h2 className="title has-text-white">Active Business Solutions Network Workbench Client</h2>
      </Link>
    </div>
  </nav>
);
