import React  from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <form className="box">
	<div className="container is-fluid">
		<div className="columns">
			<div className="column">
				<section className="section">
					<table class="table table-borderless">
						<tbody>
							<tr>
								<td><h3>Business Solution Connections</h3></td>
								<td>
									<div className="field-body">
										<div className="field">
											<p className="control">
												<input className="input" type="text" color="#ede8e8" value="e.g., LymphMeter" />
											</p>
										</div>
									</div>
								</td>
								<td><FontAwesomeIcon icon={faSearch} size="2x" /></td>
							</tr>
						</tbody>
					</table>
					<table class="table table-borderless">
						<tbody>
							<tr>
								<td><button type="button" className="button">LymphMeter™ v1.1</button></td>
								<td><button type="button" className="button">LymphMeter™ v1.2</button></td>
								<td><button type="button" className="button">LymphMeter™ v1.3</button></td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										<font color="#c60b21">Ready</font>
									</div>
								</td>
								<td class="text-center"><p class="text-sm-center"><font color="#c60b21">Ready</font></p></td>
								<td class="text-center"><p class="text-sm-center"><font color="#c60b21">Ready</font></p></td>
							</tr>
						</tbody>
					</table>
				</section>
				<section className="section">
					<table class="table table-borderless">
						<tbody>
							<tr>
								<td><h4 className="title">Business Solution Architectures</h4></td>
								<td>
									<div className="field-body">
										<div className="field">
											<p className="control">
												<input className="input" type="text" value="e.g., 2.0" />
											</p>
										</div>
									</div>
								</td>
								<td><FontAwesomeIcon icon={faSearch} size="2x" /></td>
							</tr>
						</tbody>
					</table>
					<table class="table table-borderless">
						<tbody>
							<tr>
								<td><button type="button" className="button">LymphMeter™ v1.0</button></td>
								<td><button type="button" className="button">LymphMeter™ v1.1</button></td>
								<td><button type="button" className="button">LymphMeter™ v1.2</button></td>
								<td><button type="button" className="button">LymphMeter™ v1.3</button></td>
							</tr>
							<tr>
								<td class="text-center"><p class="text-sm-center"><font color="#c60b21">Ready</font></p></td>
								<td class="text-center"><p class="text-sm-center"><font color="#c60b21">Ready</font></p></td>
								<td class="text-center"><p class="text-sm-center"><font color="#c60b21">Ready</font></p></td>
								<td class="text-center"><p class="text-sm-center"><font color="#c60b21">Ready</font></p></td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
		</div>
	</div>
  </form>
);
