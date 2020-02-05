import React, { Component } from 'react';
import TotalWinners from '../TotalWinners/TotalWinners';
import VisitLinks from '../VisitLinks/VisitLinks';
import GrandPrixCounter from '../GrandPrixCounter/GrandPrixCounter';
import FavoriteTrackDisplay from '../FavoriteTrackDisplay/FavoriteTrackDisplay';
import GamePlayTimer from '../GamePlayTimer/GamePlayTimer';
import CompleteEvents from '../CompleteEvents/CompleteEvents';
import DistanceCounter from '../DistanceCounter/DistanceCounter';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="content-con col l4 s12 ">
            <div className="f1 col  s12 white-text"><GrandPrixCounter /></div>
            <div className="stripe col  s6 white-text"><CompleteEvents /></div>
            <div className="revflag col  s6 white-text"><DistanceCounter /></div>
          </div>

         
            <div className="track col l4 s12 white-text"><FavoriteTrackDisplay /></div>
         

          <div className="content-con col l4 s12">
            <div className="revstripe col  s6 white-text"><TotalWinners /></div>
            <div className="flag col  s6 white-text"><GamePlayTimer /></div>
            <div className="visit col  s12 white-text"><VisitLinks /></div>
          </div>

        </div>
      </div>
    )
  }
}

export default Home;
