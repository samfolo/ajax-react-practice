import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

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
                            <li><NavLink 
                                to='/posts' 
                                exact
                                activeClassName="active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post', // <<< how to use relative paths
                                hash: '#submit', // these are just a few options avilable on Link components
                                search: '?quick-submit=true',
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>Home</h1>} />
                <Route path='/new-post' exact render={() => <h1>New Post</h1>} />
                <Route path='/' render={() => <h1>Both Pages (no 'exact' prop)</h1>} /> */}
                <Switch>
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/posts' component={Posts} />
                </Switch>
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