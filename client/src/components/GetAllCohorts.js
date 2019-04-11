import React, { Component } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';



class GetAllCohorts extends Component {
    constructor(props) { //set up telling component what we need to start
      super(props);
      this.state = { //beginning state
        error: null, 
        isLoaded: false, 
        items: [] //info is stored here
      };
    }
  
    componentWillMount() { //system in react, auto generates the function inside to go first; will not work when you need to manipulate info or provide info; auto-gets
      fetch("/techtonica/cohorts")
        .then(res => res.json()) //turn response into json
        .then( 
          (result) => { //use results in setState
            console.log(result)
            this.setState({
              isLoaded: true, //the result state is changed to true
              items: result//the result state is changed to the info thats been fetched and turned into json
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
          <div className="card-group">
            {/* FIXME: Want events to be in a wrapping row not in columns */}
              {items.map(item => (
                <div key={item.name} className="row"> 
                  {/* <Card.Deck> */}
                  {/* <Card.Group> */}
                  <Card border="dark" style={{ width: '18rem', color: 'black'}}>
                      <Card.Header>Apprentice ID: {item.apprentice_id} </Card.Header>
                      <Card.Body>
                        <Card.Text> {item.city}</Card.Text>
                        <Card.Text>{item.year}</Card.Text>
                      </Card.Body>
                    </Card>
                  {/* </ Card.Deck> */}
                  {/* </Card.Group> */}
                  </div>
              ))}
          </div>
        );
      }
    }
  }

export default GetAllCohorts;