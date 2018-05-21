import React, { Component } from 'react';
import './App.css';
import NavBar from './js/NavBar'
import Search from './js/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Search/>
      </div>
    );
  }
}

export default App;
