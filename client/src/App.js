import React, { Component } from 'react';
import './App.css';
import GetAllApprentices from './components/GetAllApprentices.js';
import GetAllCohorts from './components/GetAllCohorts.js';
import GetApprenticeById from './components/GetApprenticeById.js';
import CreatePost from './components/CreatePost';
import DeletePost from './components/DeletePost';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apprentices: [], // Initialize apprentices state
      postId: '',
      firstName: '',
      lastName: '',
    };
  }

  componentDidMount() {
    this.fetchApprentices(); // Fetch apprentices when the component mounts
  }

  handleAddApprentice = () => {
    this.fetchApprentices();
  };

  fetchApprentices = () => {
    fetch("/techtonica/apprentices")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ apprentices: result }); // Update the state with the fetched data
        },
        (error) => {
          console.error(error);
        }
      );
  };

  handlePostIdChange = (event) => {
    this.setState({ postId: event.target.value });
  };

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.postId) {
      this.setState({ postId: '' }, () => {
        // Notify DeletePost component to delete the post
        // Assume DeletePost calls a callback function passed as a prop
        this.onDeletePost(this.state.postId);
      });
    }
  };

  onDeletePost = (postId) => {
    // Implement deletion logic here
    // After deletion, update this.state.apprentices to reflect the change
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <u>Apprentices</u>
            <GetAllApprentices apprentices={this.state.apprentices} /> {/* Pass apprentices list as prop */}
            <u>Cohorts</u>
            <GetAllCohorts />
          </div>
          <div className="col">
            <u>Get Apprentice ID</u>
            <GetApprenticeById />
            <u>POST</u>
            <CreatePost 
              firstName={this.state.firstName} 
              lastName={this.state.lastName} 
              onAddApprentice={this.handleAddApprentice} // Pass the callback function
            />
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="delete-post-id">Enter Post ID:</label>
              <input
                type="number"
                id="delete-post-id"
                value={this.state.postId}
                onChange={this.handlePostIdChange}
                required
              />
              <button type="submit">Delete Post</button>
            </form>
            {this.state.postId && <DeletePost postId={this.state.postId} onDelete={() => this.onDeletePost(this.state.postId)} />}
          </div>
        </header>
      </div>
    );
  }
}

export default App;