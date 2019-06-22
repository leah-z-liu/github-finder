import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'

class App extends Component {
  render() {
    const name = 'Leah';
    const loading = true;
    const showName = false;

    return (
      <div className='App'>
        <h1>My App</h1>
        {loading ? <h4>Loading...</h4>: <h1>Hello {showName && name}</h1>}
      </div>
    );
  }
}

export default App;
