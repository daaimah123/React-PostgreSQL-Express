import React, { Component } from 'react';
import './App.css';
import Read from './components/Read_getAll.js';
// import GetById from './components/ReadOne_getById.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <div className="col">
           <u>Get All</u>
           <Read />
         </div>
         <div className="col">
           <u>Get By ID</u>
           {/* <GetById /> */}
         </div>
        </header>
      </div>
    );
  }
}

export default App;
