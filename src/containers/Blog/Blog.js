import React, { Component } from 'react';
import axios from '../axios';

import Posts from '../Blog/Posts/Posts';

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>New</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
                {/* <section>
                    <FullPost selectedId={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;