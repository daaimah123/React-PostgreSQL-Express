import React, { Component } from 'react';
import '../App.css';



class Read extends Component {
    constructor(props) { //set up telling component what we need to start
      super(props);
      this.state = { //beginning state
        error: null, 
        isLoaded: false, 
        items: [] //info is stored here
      };
    }
  
    componentDidMount() { //system in react, auto generates the function inside to go first; will not work when you need to manipulate info or provide info; auto-gets
      fetch("https://swapi.co/api/people/")
        .then(res => res.json()) //turn response into json
        .then( 
          (result) => { //use results in setState
            this.setState({
              isLoaded: true, //the result state is changed to true
              items: result.items //the result state is changed to the info thats been fetched and turned into json
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error // the error that's received 
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state; //allows this.state to be assumed
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul id="results">
            {items/* {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))} */}
          </ul>
        );
      }
    }
  }

export default Read;