import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import BlogsList from './components/BlogsList';
import Togglable from './components/Togglable';
import UserDetails from './components/UserDetails';
import CreateBlogForm from './components/CreateBlogForm';
import Notification from './components/Notification';
import { getAll } from './reducers/blogsReducer';
import { tryLoginWithLocalStorage } from './reducers/userReducer';

function App() {

    useEffect(() => {
        getAll();
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

    return (
        <Router>
            <div className="App">
                <Notification />
                {user===null && <LoginForm />}
                {user!==null && (
                <>
                    <UserDetails />
                    <Route exact path='/' render={BlogsPage} />   
                </>
                )}
            </div>
        </Router>
    );
}

export default App;
