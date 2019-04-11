import React, { Component } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';


class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    var data = {
      first_name: 'Wilmar', 
      last_name: 'Wallabee'
    };
    fetch("/techtonica/apprentices", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Perpetual Loading...</div>;
    } else {
      return (
        <div className="card-group">
            {items.map(item => (
              <div key={item.name} className="row"> 
                {/* <Card.Deck> */}
                {/* <Card.Group> */}
                <Card border="dark" style={{ width: '18rem', color: 'black'}}>
                    <Card.Header>Student Number: {item.id} </Card.Header>
                    <Card.Body>
                      <Card.Text> {item.first_name} {item.last_name}</Card.Text>
                      <Card.Text> </Card.Text>
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

export default CreatePost;