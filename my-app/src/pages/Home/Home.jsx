import React, { Component } from 'react';
import TotalWinners from '../../components/TotalWinners/TotalWinners';
import VisitLinks from '../../components/VisitLinks/VisitLinks';
import GrandPrixCounter from '../../components/GrandPrixCounter/GrandPrixCounter';
import FavoriteTrackDisplay from '../../components/FavoriteTrackDisplay/FavoriteTrackDisplay';
import GamePlayTimer from '../../components/GamePlayTimer/GamePlayTimer';
import CompleteEvents from '../../components/CompleteEvents/CompleteEvents';
import DistanceCounter from '../../components/DistanceCounter/DistanceCounter';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="content-con col l4 s12 ">
            <div className="component-con f1 col s12 "><GrandPrixCounter /></div>
            <div className="component-con stripe col  s6 "><CompleteEvents /></div>
            <div className="component-con revflag col  s6 "><DistanceCounter /></div>
          </div>

         
            <div className="component-con track col l4 s12 "><FavoriteTrackDisplay /></div>
         

          <div className="content-con col l4 s12">
            <div className="component-con revstripe col  s6 "><TotalWinners /></div>
            <div className="component-con flag col  s6 "><GamePlayTimer /></div>
            <div className="component-con visit col  s12 "><VisitLinks /></div>
          </div>

        </div>
      </div>
    )
  }
}

export default Home;
