import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { like, remove } from '../reducers/blogsReducer';

const SingleBlogPage = ({blog, deletable, like, remove, history}) => {    

    const removeAndGoBack = (blog) => {
        remove(blog);
        history.push('/');
    }

    if (!blog){ return null }
    
    return (
        <>
            <h1>{blog.title}</h1>
            <Link to={blog.url}>{blog.url}</Link>
            <div>{blog.likes} likes <button onClick={()=>like(blog)}>like</button></div>
            <div>by {blog.author}</div>
            {deletable && <button onClick={() => removeAndGoBack(blog)}>remove</button>}
        </>
    )
}

const mapStateToProps = (state, {id}) => {
    const blog = state.blogs.find(x => x.id === id);
    const deletable = state.users.current.name === (blog && blog.author);
    return {
        blog,
        deletable
    };
};

const mapDispatchToProps = {
    like,
    remove
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleBlogPage));