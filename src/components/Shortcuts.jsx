import React from 'react';

this.state = { hover: false }

export default () => (
  <aside className="section">
    <h4 className="is-size-4">Shortcuts</h4>
    <div className="buttons">
      <div>
        <div onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}><button className="button is-light" type="button">EAMTk</button></div>
        <div>
          <div style={tooltipStyle}>EA Mgmt. Toolkit</div>
        </div>
      </div>
      <button className="button" type="button">Knowledge & Search Tool </button>
      <button className="button" type="button">Steps Documentation Tool </button>
      <button className="button" type="button">Visualization Tool</button>
      <button className="button" type="button">Utilities</button>
      <button className="button" type="button">Workbench Blog</button>
      <button className="button" type="button">Planet EPA</button>
      <button className="button" type="button">Workbench Forum</button>
    </div>
  </aside>
  
  handleMouseIn() {
    this.setState({ hover: true })
  }
  handleMouseOut() {
    this.setState({ hover: false })
  }
  const tooltipStyle = {
    display: this.state.hover ? 'block' : 'none'
  }
  
);
