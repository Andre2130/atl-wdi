import React, { Component } from 'react';

class MenuItem extends Component {
  render(){
    return (
      
      <div className="menu-item">
      <img className="description-img" src={this.props.image} alt="Pizza" />
      <div className="menu-description">{this.props.discription}</div>
      <div className="menu-item-name">{this.props.name}</div>
      <div><strong>Price: </strong>{this.props.price}</div>
      <div>{this.props.description}</div>
      </div>
      
    );
  }
}

export default MenuItem;