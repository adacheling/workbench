import React from 'react';

import MappleToolTip from 'reactjs-mappletooltip';

export default () => (
  <aside className="section">
    <h4 className="is-size-4">Shortcuts</h4>
    <div className="buttons">
      <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="button" type="button">EAMTk</button><br/>
        </div>
        <div>
		  EA Mgmt. Toolkit
        </div>
      </MappleToolTip>
	  <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="button" type="button">ArchNav</button><br/>
        </div>
        <div>
		  Knowledge & Search Tool
        </div>
      </MappleToolTip>
	  <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="button" type="button">ArchDoc</button><br/>
        </div>
        <div>
		  Steps Documentation Tool
        </div>
      </MappleToolTip>	  
	  <MappleToolTip mappleType={'info'} shadow={true}>
        <div>
		  <button className="button" type="button">ArchViz</button><br/>
        </div>
        <div>
		  Visualization Tool
        </div>
      </MappleToolTip>      
      <button className="button" type="button">Utilities</button><br/>
      <button className="button" type="button">Workbench Blog</button><br/>
      <button className="button" type="button">Planet Archemy</button><br/>
      <button className="button" type="button">Workbench Forum</button><br/>
    </div>
  </aside>  
);