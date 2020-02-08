import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Cards from '../../components/Cards/Cards';
import './Home.css';
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
import Header from '../../components/Header/Header';

export class Home extends Component {
  render() {
    return (
        <section className="header">
        <Cards>
          <Card>
            <div>
            <CardImg 
                  backgroundImg={bgMediumStat}
                  h1={"22,600"}
                  h2={"RaceNet Events Complete"}
                />
            </div>
            <div>
              <div>
                <CardImg 
                  backgroundImg={bg_small_stat_01}
                  icon={icon_flags}
                  h1={"22,600"}
                  h2={"RaceNet Events Complete"}
                />
              </div>
              <div>
              <CardImg 
                  backgroundImg={bg_small_stat_02}
                  icon={icon_distance}
                  h1={"459,826"}
                  h2={"Distance Covered"}
                />
              </div>
            </div>
          </Card>
          <Card>
            <div>
            <CardImg 
              backgroundImg={bgLargeStat}
              icon={track}
              h1={"459,826"}
              h2={"Distance Covered"}
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
                  h1={"259,877"}
                  h2={"Winners"}
                />
              </div>
              <div>
                <CardImg 
                  backgroundImg={bg_small_stat_04}
                  icon={icon_time}
                  h1={"4 Days 8 Hours"}
                  h2={"Spent Racing"}
                />              
              </div>
            </div>
            <div>
            <CardImg 
              backgroundImg={buyNow}
              h1="Visit F1 webiste"
              link="#"
            />      
            </div>
          </Card>
        </Cards>
        </section>
    )
  }
}

export default Home;
