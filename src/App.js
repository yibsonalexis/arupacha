import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import { Home } from './screens/home'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Home />

      </div>
    );
  }
}

export default App;
