import React, { Component } from 'react';
import icon_distance from '../../assets/images/icon_distance.png';

export class DistanceCounter extends Component {
  render() {
    return (
      <div>
				<img src={icon_distance} className="responsive-img center"/>
        <h6>459,826</h6>
        <h6>Distance Covered</h6>
      </div>
    )
  }
}

export default DistanceCounter;
