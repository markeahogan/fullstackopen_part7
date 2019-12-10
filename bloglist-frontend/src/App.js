import React, { useState, useEffect } from 'react';

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

    return (

        <div className="App">
            <Notification />
            {user===null && <LoginForm />}
            {user!==null &&
      (<>
        <UserDetails />
        <Togglable buttonLabel = {'Create blog'} >
            <CreateBlogForm />
        </Togglable>
        <BlogsList />
        </>)
            }
        </div>
    );
}

export default App;
