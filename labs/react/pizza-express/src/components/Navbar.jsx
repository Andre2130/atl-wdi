import React, { Component } from 'react';

class Navbar extends Component {
  render(){
    return (
      <div className="navbar">
          <a href="#description">Our Story</a>
          <a href="#Menu">Menu</a>
          <h1>Pizza Express</h1>
          <a href="Locations">Location</a>
          <a href="#contact">Contact</a>
      </div>
    );
  }
}

export default Navbar;