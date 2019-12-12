import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { like, remove } from '../reducers/blogsReducer';

const SingleBlogPage = ({blog, deletable, like, remove}) => {
    return (
        <>
            <h1>{blog.title}</h1>
            <Link to={blog.url}>{blog.url}</Link>
            <div>{blog.likes} likes <button onClick={()=>like(blog)}>like</button></div>
            <div>by {blog.author}</div>
            {deletable && <button onClick={() => remove(blog)}>remove</button>}
        </>
    )
}

const mapStateToProps = (state, {blogID}) => {
    const blog = state.blogs.find(x => x.id === blogID);
    const deletable = state.users.current.id === blog.user.id;
    return {
        blog,
        deletable
    };
};

const mapDispatchToProps = {
    like,
    remove
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlogPage);