import React, { Component, Fragment } from 'react';
import './CardImg.css';

export class CardImg extends Component {
  render() {
    const { icon, link, firstHeader, secondHeader, reverse } = this.props;
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
            className="headersContainer" 
            style={{ 
              justifyContent: link ? 'flex-end' : 'center',
              flexDirection: reverse ? 'column-reverse' : 'column'
            }}
          >
            <span style={{fontSize: icon ? '1.5rem' : '2.5rem'}} className="firstHeader">
              {link ?
              <a href={link}>{firstHeader}</a>
              :
              firstHeader
              }
            </span>
            <span style={{fontSize: icon ? '1.125rem' : '1.25rem'}} className="secondHeader">{this.props.secondHeader}</span>
          </div> 
        </div>
      </Fragment>
    )
  }
}

export default CardImg;
