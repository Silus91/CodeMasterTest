import React, { Component } from 'react';
import './Cards.css';

export class Cards extends Component {
  render() {
    return (
      <div style={this.props.style} className="cardsComponent">
        {this.props.children}
      </div>
    )
  }
}

export default Cards;
