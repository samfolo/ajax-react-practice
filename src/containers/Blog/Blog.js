import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
        }
    }
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
                    {this.state.auth ? <Route path='/new-post' component={NewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1 style={{textAlign: 'center'}}>Not found</h1>} /> {/*handling 404 cases*/}
                    {/* <Redirect from='/' to='/posts' /> */}
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