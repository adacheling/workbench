import React  from 'react';

export default () => (
  <div className="container is-fluid">

    <div className="columns">
      <div className="column is-two-thirds">
        <Search />
      </div>
      <div className="column">
        <section className="section">
          <h2 className="title">Business Solution Connections</h2>
          <button type="button" className="button is-large">LymphMeter</button>
          <button type="button" className="button is-large">beta</button>
          <button type="button" className="button is-large">gamma</button>

        </section>
        <section className="section">
          <h3 className="is-size-3">Business Solution Architectures </h3>
          <button type="button" className="button is-large">alpha</button>
          <button type="button" className="button is-large">beta</button>
          <button type="button" className="button is-large">gamma</button>

        </section>
      </div>
    </div>
  </div>
);
