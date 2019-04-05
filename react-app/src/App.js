import React, { Component } from 'react';
import './App.css';
import Read from './components/Read_getAll.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <p>
           Part 1 of Final Assessment
           <Read />
         </p>
        </header>
      </div>
    );
  }
}

export default App;
