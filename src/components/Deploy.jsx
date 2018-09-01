import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  width: '16em',
};

export default () => (
  <form className="box">
    <h4 className="subtitle is-4">Select business solution to deploy:</h4>
    <div className="select">
      <select>
        <option>imp-rmp – 6/01/18 – P1</option>
        <option>imp-rmp – 6/01/18 – LymphMeter™</option>
        <option>imp-rmp – 6/01/18 – P3</option>
      </select>
    </div>
    <section className="section field is-grouped">
      <div className="control">
        <Link to="/solution/build/search" type="button" className="button">Search</Link>
      </div>
      <div className="control">
        <Link to="/solution/build/reuse" type="button" className="button">Back</Link>
      </div>
      <div className="control">
        <a href="#" type="button" className="button">Deploy</a>
      </div>
    </section>
  </form>
);
