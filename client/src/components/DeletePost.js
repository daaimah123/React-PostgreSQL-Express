import React, { Component } from 'react';
import '../App.css';

class DeletePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      message: ''
    };
  }

  componentDidMount() {
    this.deletePost();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.postId !== this.props.postId) {
      this.deletePost();
    }
  }

  deletePost() {
    const postId = this.props.postId;
    fetch(`/techtonica/apprentices/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            message: result.message || 'Post deleted successfully.'
          }, () => {
            // Call the onDelete callback after successful deletion
            this.props.onDelete(postId);
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, message } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      );
    }
  }
}

export default DeletePost;
