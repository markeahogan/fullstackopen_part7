import React, { useState, useEffect } from 'react';

import LoginForm from './components/LoginForm';
import BlogsList from './components/BlogsList';
import Togglable from './components/Togglable';
import UserDetails from './components/UserDetails';
import CreateBlogForm from './components/CreateBlogForm';
import Notification from './components/Notification';

import loginService from './services/loginService';
import blogService from './services/blogs';
import { getAll } from './reducers/blogsReducer';
//todo use userreducer here to login with local storage

function App() {

    useEffect(() => {
        getAll();
    }, []);

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem(USER_LOCAL);
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setUser(user);
            blogService.setToken(user.token);
        }
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
