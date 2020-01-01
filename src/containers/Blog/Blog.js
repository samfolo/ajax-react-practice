import React, { Component } from 'react';
import axios from '../axios';
import { Route } from 'react-router-dom';

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
                            <li><a href='/new-post'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' exact render={() => <h1>Home</h1>} />
                <Route path='/new-post' exact render={() => <h1>New Post</h1>} />
                <Route path='/' render={() => <h1>Both Pages (no 'exact' prop)</h1>} />
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