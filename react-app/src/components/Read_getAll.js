import React, { Component } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';



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
      fetch("https://localhost:3000")
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
          <div col>
            {/* Want events to be in a row not in columns */}
              {items.map(item => (
                <div key={item.name} className="row"> 
                  {/* <CardDeck> */}
                  {/* <CardGroup> */}
                  <Card border="dark" style={{ width: '18rem' }}>
                      <Card.Header>Name: {item.name} </Card.Header>
                      <Card.Body>
                        <Card.Title>Height: {item.height}</Card.Title>
                        <Card.Text>
                          Hair: {item.hair_color} <br/> Skin: {item.skin_color} <br/> Eye: {item.eye_color}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  {/* </CardDeck> */}
                  {/* </CardGroup> */}
                  </div>
              ))}
          </div>
        );
      }
    }
  }

export default Read;