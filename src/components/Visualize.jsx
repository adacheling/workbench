import React  from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <form className="box">
	<section className="section">
		<table class="table table-borderless">
			<tbody>
				<tr>
					<td colspan="4"><h6 className="title">LymphMeter™ v2.0</h6></td>
				</tr>
			</tbody>
		</table>
		<table class="table table-borderless text-center">
			<tbody>
				<tr>
					<td class="text-center"><p class="text-sm-center"><font color="#c60b21">Applicability Dashboard Log:</font></p></td>
					<td class="text-center"><p class="text-sm-center"><font color="#c60b21">Suitability Dashboard Log:</font></p></td>
				</tr>
				<tr>
					<td class="text-center">
						<div className="select is-multiple">
							<select multiple size="8">
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
							</select>
						</div>
					</td>
					<td class="text-center">
						<div className="select is-multiple">
							<select multiple size="8">
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
								<option><font color="#ede8e8">- - - - - - - - - - - - - - </font></option>
							</select>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</section>
  </form>
);