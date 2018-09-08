import React from 'react';
import MappleToolTip from 'reactjs-mappletooltip';
import './App.css';

export default () => (
  <aside className="section">
    <h4 className="is-size-4">Shortcuts</h4>
    <div className="buttons">
      <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="btn btn-primary" type="button">EAMTk</button>
        </div>
        <div>
		  EA Mgmt. Toolkit
        </div>
      </MappleToolTip>
	  <br/>
	  <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="btn btn-primary" type="button">ArchNav</button>
        </div>
        <div>
		  Knowledge & Search Tool
        </div>
      </MappleToolTip>
	  <br/>
	  <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="btn btn-primary" type="button">ArchDoc</button>
        </div>
        <div>
		  Steps Documentation Tool
        </div>
      </MappleToolTip>
	  <br/>
	  <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="btn btn-primary" type="button">ArchViz</button>
        </div>
        <div>
		  Visualization Tool
        </div>
      </MappleToolTip>
	  <br/>
      <button className="btn btn-primary" type="button">Utilities</button><br/>
      <button className="btn btn-primary" type="button">Workbench Blog</button><br/>
      <button className="btn btn-primary" type="button">Planet Archemy</button><br/>
      <button className="btn btn-primary" type="button">Workbench Forum</button><br/>
    </div>
  </aside>  
);