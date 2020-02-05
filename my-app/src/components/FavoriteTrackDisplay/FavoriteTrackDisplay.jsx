import React, { Component } from 'react';
import track_spline_abudhabi from '../../assets/images/track_spline_abudhabi.png';

export class FavoriteTrackDisplay extends Component {
  render() {
    return (
      <div>
        <p>Favorite Track</p>
        <p>Abu Dhabi</p>
				<img src={track_spline_abudhabi} className="responsive-img center"/>
      </div>
    )
  }
}

export default FavoriteTrackDisplay;
