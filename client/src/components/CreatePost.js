import React, { Component } from 'react';
import '../App.css';

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
      id: 5,
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
      .then(res => {return res.json()})
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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
          {items.first_name} {items.last_name}
        </div>
      );
    }
  }
}

export default CreatePost;