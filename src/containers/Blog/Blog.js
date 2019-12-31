import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Sam'
                }
            });

            this.setState({ posts: updatedPosts });
            console.log(response)
        })
    }

    render () {
        const posts = this.state.posts.map((post, i) => {
            return (
                <Post 
                    key={`id_${post.title[0]}_${i}_${post.userId}`} 
                    userID={post.userId} 
                    title={post.title}
                    author={post.author}
                    body={post.body} />
            );
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;