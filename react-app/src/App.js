import React, { Component } from 'react';
import './App.css';
import Read from './components/Read_getAll.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <div>
           Part 1 of Final Assessment
           <Read />
         </div>
        </header>
      </div>
    );
  }
}

export default App;
