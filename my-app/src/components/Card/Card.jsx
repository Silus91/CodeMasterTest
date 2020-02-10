import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {

  render() {
    return (
      <div className="cardContainer">
        {this.props.children}
      </div>
    )
  }
}

export default Card;
