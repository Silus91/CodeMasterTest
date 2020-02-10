import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Cards from '../../components/Cards/Cards';
import CardImg from '../../components/CardImg/CardImg';
import bg_small_stat_01 from '../../assets/images/bg_small_stat_01.jpg';
import bg_small_stat_02 from '../../assets/images/bg_small_stat_02.jpg';
import bg_small_stat_03 from '../../assets/images/bg_small_stat_03.jpg';
import bg_small_stat_04 from '../../assets/images/bg_small_stat_04.jpg';

import buyNow from '../../assets/images/ad_f12018_buyNow.jpg';
import bgMediumStat from '../../assets/images/bg_medium_stat_01.jpg';
import bgLargeStat from '../../assets/images/bg_large_stat.jpg';
import track from '../../assets/images/track_spline_abudhabi.png';

import icon_flags from '../../assets/images/icon_flags.png';
import icon_distance from '../../assets/images/icon_distance.png';
import icon_cup from '../../assets/images/icon_cup.png';
import icon_time from '../../assets/images/icon_time.png';

export class Home extends Component {
  render() {
    return (
      <Cards>
        <Card>
          <div>
            <CardImg 
              backgroundImg={bgMediumStat}
              firstHeader={"689,562"}
              secondHeader={"Grand Prixs this week"}
            />
          </div>
          <div>
            <div>
              <CardImg 
                backgroundImg={bg_small_stat_01}
                icon={icon_flags}
                firstHeader={"22,600"}
                secondHeader={"RaceNet Events Complete"}
              />
            </div>
            <div>
            <CardImg 
                backgroundImg={bg_small_stat_02}
                icon={icon_distance}
                firstHeader={"459,826"}
                secondHeader={"Distance Covered"}
              />
            </div>
          </div>
        </Card>
        <Card>
          <div>
            <CardImg 
              backgroundImg={bgLargeStat}
              icon={track}
              firstHeader={"Abu Dhabi"}
              secondHeader={"Favorite Track"}
              reverse
            />
          </div>
        </Card>
        <Card>
          <div>
            <div>
              <CardImg 
                backgroundImg={bg_small_stat_03}
                icon={icon_cup}
                firstHeader={"259,877"}
                secondHeader={"Winners"}
              />
            </div>
            <div>
              <CardImg 
                backgroundImg={bg_small_stat_04}
                icon={icon_time}
                firstHeader={"4 Days 8 Hours"}
                secondHeader={"Spent Racing"}
              />              
            </div>
          </div>
          <div>
          <CardImg 
            backgroundImg={buyNow}
            firstHeader="Visit F1 2018`s webiste"
            link="#"
          />      
          </div>
        </Card>
      </Cards>
    )
  }
}

export default Home;
