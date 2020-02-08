import React, { Component, Fragment } from 'react';
import './CardImg.css';

export class CardImg extends Component {
  render() {
    const { icon, link, h1, h2, reverse } = this.props;
    return (
      <Fragment>
        <img src={this.props.backgroundImg} className="backgroundImg" />
        <div style={{ flexDirection: reverse ? 'column-reverse' : 'column'}} className="overlay">
          {icon &&
          <div className="cardIcon">
            <img src={icon} />
          </div>
          }
          <div  
          style={{ 
            justifyContent: link ? 'flex-end' : 'center',
            flexDirection: reverse ? 'column-reverse' : 'column'
          }}
          >
          <span style={{fontSize: icon ? '24px' : '40px'}} className="h1">
            {link ?
             <a href={link}>{h1}</a>
            :
            h1
            }
          </span>
          <span style={{fontSize: icon ? '18px' : '20px'}} className="h2">{this.props.h2}</span>
          </div> 
        </div>
      </Fragment>
    )
  }
}

export default CardImg;
