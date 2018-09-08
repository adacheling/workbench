import React  from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <form className="box">
	<div className="container is-fluid">
		<div className="columns">
			<div className="column">
				<section className="section">
					<h2 className="title">Business Solution Connections</h2>
					<table class="table table-borderless">
						<tbody>
							<tr>
								<td><button type="button" className="button">LymphMeter™ v1.1</button></td>
								<td><button type="button" className="button">LymphMeter™ v1.2</button></td>
								<td><button type="button" className="button">LymphMeter™ v1.3</button></td>
							</tr>
							<tr>
								<td><font color="#c60b21">Ready</font></td>
								<td><font color="#c60b21">Ready</font></td>
								<td><font color="#c60b21">Ready</font></td>
							</tr>
						</tbody>
					</table>
				</section>
				<section className="section">
					<h2 className="title">Business Solution Architectures</h2>
					<button type="button" className="button">LymphMeter™ v1.0</button>
					<button type="button" className="button">LymphMeter™ v1.1</button>
					<button type="button" className="button">LymphMeter™ v1.2</button>
					<button type="button" className="button">LymphMeter™ v1.3</button>
				</section>
			</div>
		</div>
	</div>
  </form>
);
