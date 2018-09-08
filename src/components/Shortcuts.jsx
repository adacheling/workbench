import React from 'react';
import MappleToolTip from 'reactjs-mappletooltip';
import './App.css';

export default () => (
  <aside className="section">
    <h4 className="is-size-4">Shortcuts</h4>
    <div className="btn-group">
      <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="button" type="button">EAMTk™</button>
        </div>
        <div>
		  EA Mgmt. Toolkit
        </div>
      </MappleToolTip>
	  <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="button" type="button">ArchNav™</button>
        </div>
        <div>
		  Knowledge & Search Tool
        </div>
      </MappleToolTip>
	  <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="button" type="button">ArchDoc™</button>
        </div>
        <div>
		  Steps Documentation Tool
        </div>
      </MappleToolTip>
	  <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="button" type="button">ArchViz™</button>
        </div>
        <div>
		  Visualization Tool
        </div>
      </MappleToolTip>
      <button className="button" type="button">Utilities</button>
      <button className="button" type="button">Workbench Blog</button>
      <button className="button" type="button">Planet Archemy</button>
      <button className="button" type="button">Workbench Forum</button>
    </div>
  </aside>  
);