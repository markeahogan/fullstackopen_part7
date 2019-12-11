import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import LoginForm from './components/LoginForm';
import BlogsList from './components/BlogsList';
import UserList from './components/UserList';
import Togglable from './components/Togglable';
import UserDetails from './components/UserDetails';
import CreateBlogForm from './components/CreateBlogForm';
import Notification from './components/Notification';
import SingleUserPage from './components/SingleUserPage';
import { getAll as getAllBlogs } from './reducers/blogsReducer';
import { tryLoginWithLocalStorage } from './reducers/userReducer';

function App() {

    useEffect(() => {
        getAllBlogs();
    }, []);

    useEffect(() => {
        tryLoginWithLocalStorage();
    }, []);

    const BlogsPage = () => {
        return (
            <Togglable buttonLabel = {'Create blog'} >
                <CreateBlogForm />
            </Togglable>
            <BlogsList />
        );
    };

    const UsersPage = () => {
        return (
            <h1>Users</h1>
            <UserList />
        )
    }

    return (
        <Router>
            <div className="App">
                <Notification />
                {user===null && <LoginForm />}
                {user!==null && (
                <>
                    <UserDetails />
                    <Route exact path='/' render={BlogsPage} />   
                    <Route exact path='/users' render={UsersPage} />
                    <Route path='/users/:id' render={() => SingleUserPage(match.params.id)} />
                </>
                )}
            </div>
        </Router>
    );
}

const mstp = state => {
    return {
        user:state.users.current;
    }
}

export default connect(mstp)(App);
