import React, { Component } from 'react';
import icon_flags from '../../assets/images/icon_flags.png';

export class CompleteEvents extends Component {
	render() {
		return (
			<div>
				<img src={icon_flags} className="responsive-img center"/>
				<p>22,600</p>
				<p>RaceNet Events Complete</p>
			</div>
		)
	}
}

export default CompleteEvents;
