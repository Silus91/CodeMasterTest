import React, { Component } from 'react';
import icon_distance from '../../assets/images/icon_distance.png';

export class DistanceCounter extends Component {
  render() {
    return (
      <div>
				<img src={icon_distance} className="responsive-img center"/>
        <p>459,826</p>
        <p>Distance Covered</p>
      </div>
    )
  }
}

export default DistanceCounter;
