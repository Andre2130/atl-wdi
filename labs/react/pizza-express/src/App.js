import React, { Component } from 'react';
import Contact from './components/Contact.jsx'
import SplashImage from './components/SplashImage.jsx'
import Navbar from './components/Navbar.jsx'
import Description from './components/Description.jsx'
import MenuList from './components/MenuList.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SplashImage />
        <Description />
        <MenuList />
      </div>
    );
  }
}

export default App;
