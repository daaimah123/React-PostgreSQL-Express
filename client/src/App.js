import React, { Component } from 'react';
import './App.css';
import GetAll from './components/GetAll.js/index.js';
// import GetById from './components/GetById.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <div className="col">
           <u>Get All</u>
           <GetAll />
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
