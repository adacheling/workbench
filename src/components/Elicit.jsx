import React from 'react';
import { Link } from 'react-router-dom';

    companies:[
      { name: 'company1', jobs: ['job1-1', 'job1-2', 'job1-3']},
      { name: 'company2', jobs: ['job2-1', 'job2-2', 'job2-3']},
      { name: 'company3', jobs: ['job3-1', 'job3-2', 'job3-3']}
    ];
    selectedCompany: 'company1'
	
	let company = this.state.companies.filter(company => {
              return company.name === this.state.selectedCompany
            })

function handleChange(e) {
  this.setState({selectedCompany: e.target.value})
}

export default () => (

  <form className="box">
    <p className="subtitle is-4">Select strategic roadmap:</p>
    <div className="select">
	
	jobs
        <select>
          {
            
            company[0].jobs.map((job, i) => {
              return <option>{job}</option>
            })
          }
        </select>
        
        companies
        <select value={this.state.selectedCompany} onChange={this.handleChange.bind(this)}>
          {
            this.state.companies.map((company, i) => {
              return <option>{company.name}</option>
            })
          }
        </select>
	
	
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
