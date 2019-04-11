import React, { Component } from 'react';
import './App.css';
import GetAllApprentices from './components/GetAllApprentices.js';
import GetAllCohorts from './components/GetAllCohorts.js';
import GetApprenticeById from './components/GetApprenticeById.js';
import CreatePost from './components/CreatePost';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <div>
           <u>Apprentices</u>
           <GetAllApprentices />
           <u>Cohorts</u>
           <GetAllCohorts />
         </div>
         <div className="col">
           <u>Get Apprentice ID</u>
           <GetApprenticeById />
           POST
            <CreatePost />
         </div>
        </header>
      </div>
    );
  }
}

export default App;
