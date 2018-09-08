import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  width: '16em',
};

export default () => (
  <form className="box">
    <section className="section">
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" style={style}>Component being implemented: </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input className="input is-static" type="text" value="imp-rmp-06/01/18-LymphMeter" readOnly />
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" style={style}>Candidate solution reused: </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input className="input is-static" type="text" value="Candidate Solution-1 (90% match)" readOnly />
            </p>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" style={style}>Target solution name: </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input className="input is-static" type="text" value="LymphMeter" readOnly />
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" style={style}>Target solution version: </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input className="input is-small is-static" type="text" value="2.0" readOnly />
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className=" box">
      <h2>Discover reusable solution artifacts:</h2>
      <div className="select is-multiple">
        <select multiple size="8">

          <option>Requirements specification</option>
          <option>Design specification</option>
          <option>Gitlab code repository (link)</option>
          <option>Other artifacts</option>

        </select>
      </div>
    </section>

    <section className="section field is-grouped">
      <div className="control">
        <Link to="/solution/build/discover" type="button" className="button">Back</Link>
      </div>
      <div className="control">
        <Link to="/solution/build/deploy" type="button" className="button">Reuse</Link>
      </div>
    </section>
  </form>
);
