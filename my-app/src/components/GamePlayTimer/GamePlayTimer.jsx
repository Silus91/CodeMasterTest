import React, { Component } from 'react';
import icon_time from '../../assets/images/icon_time.png';

export class GamePlayTimer extends Component {
  render() {
    return (
      <div>
        <img src={icon_time} className="responsive-img center"/>
        <p>4 Days 8 Hours</p>
        <p>Spent Racing</p>
      </div>
    )
  }
}

export default GamePlayTimer;
