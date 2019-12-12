import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { like } from '../reducers/blogsReducer';

const SingleBlogPage = ({blog, like}) => {
    return (
        <>
            <h1>{blog.title}</h1>
            <Link to={blog.url}>{blog.url}</Link>
            <div>{blog.likes} likes <button onClick={()=>like(blog)}>like</button></div>
            <div>by {blog.author}</div>
        </>
    )
}

const mapStateToProps = (state, {blogID}) => {
    return {
        blog:state.blogs.find(x => x.id === blogID);
    };
};

const mapDispatchToProps = {
    like
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlogPage);