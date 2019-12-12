import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { like, remove } from '../reducers/blogsReducer';

const Blog = ({ blog, like, remove, currentUser }) => {

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    };
    
    return (
        <div style={blogStyle}>
        <Link to={`/${blog.id}`}>{blog.title}</Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {user: state.user}
}

const mapDispatchToProps = {
    like,
    remove
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);