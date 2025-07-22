import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state with an empty list of posts 
    this.state = {
      posts: [],
      error: null,
    };
  }

  // Method to fetch data from the API 
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts') // [cite: 23]
      .then(response => response.json())
      .then(json => this.setState({ posts: json }))
      .catch(error => this.setState({ error: error }));
  }

  // Call loadPosts() after the component mounts 
  componentDidMount() {
    this.loadPosts();
  }

  // Handle errors in child components 
  componentDidCatch(error, info) {
    alert('An error occurred: ' + error.message);
    console.error("Caught an error:", error, info);
  }

  // Render the list of posts 
  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;