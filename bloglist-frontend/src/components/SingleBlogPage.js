import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { like, remove, addComment } from '../reducers/blogsReducer';

import { useTextField } from '../hooks/useTextField';
import TextField from './TextField';
import { Form, Button } from 'react-bootstrap';

const SingleBlogPage = ({blog, deletable, like, remove, history, comments, addComment}) => {    

    const newComment = useTextField();
    
    if (!blog){ return null }

    const removeAndGoBack = () => {
        remove(blog);
        history.push('/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = newComment.value;
        addComment(blog, comment);
        newComment.clear();
    }
    
    return (
        <>
            <h1 style={{marginTop:40}}>{blog.title}</h1>
            <h3> by {blog.author}</h3>
            <Link to={blog.url}>{blog.url}</Link>
            <div style={{marginTop:10}}> <Button variant="outline-dark" onClick={()=>like(blog)}>{blog.likes} likes</Button></div>
            {deletable && <button onClick={removeAndGoBack}>remove</button>}
            <h4 style={{marginTop:40}}>Comments</h4>
            <Form onSubmit={handleSubmit}>
                <TextField noWrapper {...newComment} />
                <Button type='submit'>add comment</Button>
            </Form>
            <ul>
                {comments.map((x, index) => <li key={index}>{x}</li>)}
            </ul>
        </>
    )
}

const mapStateToProps = (state, {id}) => {
    const blog = state.blogs.find(x => x.id === id);
    const deletable = state.users.current.name === (blog && blog.author);
    return {
        blog,
        deletable,
        comments:(blog && blog.comments) || []
    };
};

const mapDispatchToProps = {
    like,
    remove,
    addComment
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleBlogPage));