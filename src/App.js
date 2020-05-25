import React, { Component } from 'react';
import Header from './Component/Header';
import MainContent from './Component/MainContent';
import Footer from './Component/Footer';
import Logo from './Component/logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />,
        <Logo />
        <MainContent />,
        
      </div>
    );
  }
}

export default App;
