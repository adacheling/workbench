import React from 'react';
import { Link } from 'react-router-dom';

  handleChange1 = (selectedOption) => {
    this.setState({selectedOption});
  };

  handleChange2 = (selectedOption) => {
    this.setState({selectedOption2: selectedOption})
  };

  options1 = [
    {value: 'one', label: 'One'},
    {value: 'two', label: 'Two'}
  ];

  options2 = [
    {value: 'one-a', label: 'One A', link: 'one'},
    {value: 'one-b', label: 'One B', link: 'one'},
    {value: 'two-a', label: 'Two A', link: 'two'},
    {value: 'two-b', label: 'Two B', link: 'two'}
  ];
	
  filteredOptions = options2.filter((o) => o.link === this.selectedOption.value)

export default () => (
  <form className="box">
  
    <div>
      <p>Select one first</p>
      <Select
        name="form-field-name"
        value={this.selectedOption.value}
        onChange={this.handleChange1}
        options={options1}
      />
      <p>Then the other</p>
      <Select
        name="form-field-name"
        value={this.selectedOption2.value}
        onChange={this.handleChange2}
        options={filteredOptions}
      />
    </div>
  
    <p className="subtitle is-4">Select strategic roadmap:</p>
    <div className="select">
      <select>
        <option>stg-rmp – 1/10/17</option>
        <option>stg-rmp – 1/10/18</option>
      </select>
    </div>
   <br/><br/>
    <p className="subtitle is-4">Select implementation roadmap:</p>
    <div className="select is-multiple">
      <select multiple size="4">
        <option>imp-rmp – 2/10/17</option>
        <option>imp-rmp – 5/01/17</option>
        <option>imp-rmp – 7/10/17</option>
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
