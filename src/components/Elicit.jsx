import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
  <form className="box">
    <p className="subtitle is-4">Select Strategic Roadmap:</p>
    <div className="select">
      <select>
        <option>imp-rmp – 2/01/17</option>
        <option>imp-rmp – 5/01/17</option>
        <option>imp-rmp – 7/10/17</option>
      </select>
    </div>

    <p className="subtitle is-4">Select implementation roadmap:</p>
    <div className="select is-multiple">
      <select multiple size="4">
        <option>imp-rmp – 2/15/18</option>
        <option>imp-rmp – 4/10/18</option>
        <option>imp-rmp – 6/01/18</option>
      </select>
    </div>

    <section className="section field is-grouped">
      <div className="control">
        <Link to="/solution/build/elicit" type="button" className="button">Back</Link>
      </div>
      <div className="control">
        <Link to="/solution/build/search" type="button" className="button">Next</Link>
      </div>
    </section>
  </form>

);
