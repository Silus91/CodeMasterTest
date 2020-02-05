import React, { Component } from 'react';
import icon_cup from '../../assets/images/icon_cup.png';


export class TotalWinners extends Component {
  render() {
    return (
      <div>
        <img src={icon_cup} className="responsive-img center"/>
        <p>259,877</p>
        <p>Winners</p>
      </div>
    )
  }
}

export default TotalWinners;
