import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedPost: null,
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || this.props.match.params.id !== this.state.loadedPost.id) {
                axios.get(`/posts/${this.props.match.params.id}`)
                .then(response => {
                    this.setState({ 
                        loadedPost: response.data,
                    });
                });
            }
        }
    }

    handleDeletePost = () => {
        axios.delete(`/posts/${this.state.loadedPost.id}`);
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

        if (this.props.match.params.id) {
            post = <p style={{ textAlign: 'center' }}>loading..</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.handleDeletePost}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;