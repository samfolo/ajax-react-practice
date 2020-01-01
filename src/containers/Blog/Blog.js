import React, { Component } from 'react';
import axios from '../axios';
import { Route, Link } from 'react-router-dom';

import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit', // these are just a few options avilable on Link components
                                search: '?quick-submit=true',
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>} />
                <Route path='/new-post' exact render={() => <h1>New Post</h1>} />
                <Route path='/' render={() => <h1>Both Pages (no 'exact' prop)</h1>} /> */}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
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