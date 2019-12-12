import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import LoginForm from './components/LoginForm';
import BlogsList from './components/BlogsList';
import UserList from './components/UserList';
import Togglable from './components/Togglable';
import LoggedInDetails from './components/LoggedInDetails';
import CreateBlogForm from './components/CreateBlogForm';
import Notification from './components/Notification';
import SingleUserPage from './components/SingleUserPage';
import SingleBlogPage from './components/SingleBlogPage';

import { getAll as getAllBlogs } from './reducers/blogsReducer';
import { tryLoginWithLocalStorage } from './reducers/userReducer';

function App({user, tryLoginWithLocalStorage, getAllBlogs}) {

    useEffect(() => {
        getAllBlogs();
    }, []);

    useEffect(() => {
        console.log("login?");
        tryLoginWithLocalStorage();
    }, []);

    const BlogsPage = () => {
        return (
            <>
                <Togglable buttonLabel = {'Create blog'} >
                    <CreateBlogForm />
                </Togglable>
                <BlogsList />
            </>
        );
    };

    const UsersPage = () => {
        return (
            <>
                <h1>Users</h1>
                <UserList />
            </>
        )
    }

    return (
        <Router>
            <div className="App">
                <Notification />
                {user===null && <LoginForm />}
                {user!==null && (
                <>
                    <LoggedInDetails />
                    <Route exact path='/' render={BlogsPage} />   
                    <Route exact path='/users' render={UsersPage} />
                    <Route path='/users/:id' render={({match}) => <SingleUserPage id={match.params.id} />} />
                <Route path='/blogs/:id' render={({match}) => <SingleBlogPage id={match.params.id} /> } />
                </>
                )}
            </div>
        </Router>
    );
}

const mapStateToProps = state => {
    return {
        user:state.users.current
    }
}

const mapDispatchToProps = {
    getAllBlogs,
    tryLoginWithLocalStorage
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
