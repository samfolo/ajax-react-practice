import React from 'react';
import axios from '../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css'

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      error: false,
      posts: [],
    };
  }

  componentDidMount() {
    console.log(this.props);
      axios.get('/posts')
      .then(response => {
          const posts = response.data.slice(0, 4);
          const updatedPosts = posts.map(post => {
              return {
                  ...post,
                  author: 'Sam'
              }
          });
          this.setState({ posts: updatedPosts });
      })
      .catch(error => {
          console.log(error);
      })
  }

  displayPost = (selectedId) => {
    this.setState({ selectedId: selectedId, });
  }

  render() {
    let posts = <p>Something went wrong..</p>

    if (!this.state.error) {
        posts = this.state.posts.map((post, i) => {
            return (
                <Link to={'/' + post.id} key={`id_${post.title[0]}_${i}_${post.userId}`} >
                  <Post
                      userID={post.userId} 
                      title={post.title}
                      author={post.author}
                      onClick={() => this.displayPost(post.id)} />
                </Link>
            );
        });
    }

    return (
      <section className="Posts">
          {posts}
      </section>
    );
  }
}

export default Posts;