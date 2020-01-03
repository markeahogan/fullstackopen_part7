import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from './components/LoginForm';
import BlogsList from './components/BlogsList';
import UserList from './components/UserList';
import Togglable from './components/Togglable';
import CreateBlogForm from './components/CreateBlogForm';
import Notification from './components/Notification';
import SingleUserPage from './components/SingleUserPage';
import SingleBlogPage from './components/SingleBlogPage';

import { getAll as getAllBlogs } from './reducers/blogsReducer';
import { tryLoginWithLocalStorage, getAll as getAllUsers } from './reducers/userReducer';
import Navigation from './components/Navigation';

function App({ user, tryLoginWithLocalStorage, getAllBlogs, getAllUsers }) {

    useEffect(() => {
        getAllBlogs();
    }, []);

    useEffect(() => {
        tryLoginWithLocalStorage();
        getAllUsers();
    }, []);

    const BlogsPage = () => {
        return (
            <>
                <h1 style={{ marginTop:10 }}>Blogs</h1>
                <Togglable buttonLabel = {'Create Blog'} >
                    <CreateBlogForm />
                </Togglable>
                <BlogsList />
            </>
        );
    };

    const UsersPage = () => {
        return (
            <>
                <h1 style={{ marginTop:10 }}>Users</h1>
                <UserList />
            </>
        );
    };

    return (
        <Router>
            <div className="App">
                <Notification />
                {user===null && <LoginForm />}
                {user!==null && (
                <>
                    <Navigation />
                    <Route exact path='/' render={BlogsPage} />
                    <Route exact path='/users' render={UsersPage} />
                    <Route path='/users/:id' render={({ match }) => <SingleUserPage id={match.params.id} />} />
                    <Route path='/blogs/:id' render={({ match }) => <SingleBlogPage id={match.params.id} /> } />
                </>
                )}
            </div>
        </Router>
    );
}

const mapStateToProps = state => {
    return {
        user:state.users.current
    };
};

const mapDispatchToProps = {
    getAllBlogs,
    getAllUsers,
    tryLoginWithLocalStorage
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
