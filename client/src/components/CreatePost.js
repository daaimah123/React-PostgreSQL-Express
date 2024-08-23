import React, { Component } from 'react';
import '../App.css';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      firstName: '',
      lastName: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
    };
  
    fetch("/techtonica/apprentices", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result, // Assuming the response includes the newly created apprentice's details
            firstName: '', // Reset input fields
            lastName: '',
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };  

  render() {
    const { error, isLoaded, firstName, lastName } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="card-group">
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                required
              />
            </label>
            <button type="submit">Create Post</button>
          </form>
        </div>
      );
    }
  }
}

export default CreatePost;
